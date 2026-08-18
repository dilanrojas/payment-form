const STORAGE_KEY = "payments";

const getPayments = () => {
  const storedPayments = localStorage.getItem(STORAGE_KEY);

  return storedPayments === null ? [] : JSON.parse(storedPayments);
}

const savePayment = (payment) => {
  const payments = getPayments();
  payment.id = crypto.randomUUID();
  payments.push(payment);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payments));
}

const setupPaymentForm = () => {
  const form = document.getElementById('paymentForm');

  if (!form) return;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const cardType = document.getElementById('card-type');
  const cardNumber = document.getElementById('card-number');
  const cardExpiry = document.getElementById('card-expiry');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const payment = {
      name: name.value,
      email: email.value,
      password: password.value,
      cardType: cardType.value,
      cardNumber: cardNumber.value,
      cardExpiry: cardExpiry.value
    }

    savePayment(payment);
    alert('Pago registrado correctamente');
    form.reset();
    window.location.href = "index.html";
  })
}

const deletePayment = (id) => {
  const payments = getPayments();
  const updatedPayments = payments.filter((payment) => payment.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPayments));
  displayPayments();
};

const displayPayments = () => {
  const paymentList = document.getElementById('payment-list');

  if (!paymentList) return;

  paymentList.innerHTML = "";

  const payments = getPayments();

  payments.forEach((p) => {
    const row = document.createElement('tr');

    row.className = "hover:bg-gray-50/50 transition-colors";
    row.innerHTML = `
      <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        ${p.name}
      </td>
      <td class="px-6 py-4 text-gray-600 whitespace-nowrap">
        ${p.email}
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200 capitalize">
          ${p.cardType}
        </span>
      </td>
      <td class="px-6 py-4 text-right whitespace-nowrap">
        <button 
          onclick="deletePayment('${p.id}')"
          class="inline-flex items-center text-xs font-semibold text-red-600 hover:text-red-800 transition-colors focus:outline-none focus:underline">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </span>
        </button>
      </td>
    `;

    paymentList.appendChild(row);
  });
};

setupPaymentForm();
displayPayments();
