const API_URL = '/api';

function showResponse(elementId, data) {
  document.getElementById(elementId).innerText = JSON.stringify(data, null, 2);
}

function showError(elementId, message) {
  document.getElementById(elementId).innerText = `❌ Erro: ${message}`;
}

document.getElementById('btnEntry').addEventListener('click', async () => {
  const plate = document.getElementById('plateEntry').value.trim();
  if (!plate) {
    alert('🚨 Por favor, digite a placa.');
    return;
  }
  try {
    const res = await fetch(`${API_URL}/entry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plate }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Erro desconhecido');
    showResponse('responseEntry', data);
  } catch (error) {
    showError('responseEntry', error.message);
  }
});

document.getElementById('btnExit').addEventListener('click', async () => {
  const plate = document.getElementById('plateExit').value.trim();
  if (!plate) {
    alert('🚨 Por favor, digite a placa.');
    return;
  }
  try {
    const res = await fetch(`${API_URL}/exit/${plate}`, {
      method: 'PATCH',
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Erro desconhecido');
    showResponse('responseExit', data);
  } catch (error) {
    showError('responseExit', error.message);
  }
});

document.getElementById('btnCheck').addEventListener('click', async () => {
  const plate = document.getElementById('plateCheck').value.trim();
  if (!plate) {
    alert('🚨 Por favor, digite a placa.');
    return;
  }
  try {
    const res = await fetch(`${API_URL}/check/${plate}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Veículo não encontrado');
    showResponse('responseCheck', data);
  } catch (error) {
    showError('responseCheck', error.message);
  }
});
