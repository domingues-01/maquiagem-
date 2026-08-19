// --- LÓGICA DO QUIZ INTERATIVO ---
let currentStep = 1;

const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const quizForm = document.getElementById('makeup-quiz');
const quizResult = document.getElementById('quiz-result');
const resultContent = document.getElementById('result-content');
const restartBtn = document.getElementById('restart-quiz');

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        const q1Selected = document.querySelector('input[name="skin"]:checked');
        if (!q1Selected) {
            alert('Por favor, selecione uma opção para continuar.');
            return;
        }

        document.getElementById('q1').classList.remove('active');
        document.getElementById('q2').classList.add('active');
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
        currentStep = 2;
    });
}

if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const q2Selected = document.querySelector('input[name="time"]:checked');
        if (!q2Selected) {
            alert('Por favor, selecione quanto tempo você tem.');
            return;
        }

        const skinType = document.querySelector('input[name="skin"]:checked').value;
        const timeAvailable = q2Selected.value;

        // Gerar sugestão personalizada
        let text = '';

        if (skinType === 'oleosa') {
            text += '<p><strong>• Dica de Pele:</strong> Prefira géis de limpeza e hidratantes matificantes com toque seco.</p>';
        } else if (skinType === 'seca') {
            text += '<p><strong>• Dica de Pele:</strong> Aposte em séruns com Ácido Hialurônico e hidratantes cremosos.</p>';
        } else {
            text += '<p><strong>• Dica de Pele:</strong> Sua pele é equilibrada! Use um hidratante leve fluído.</p>';
        }

        if (timeAvailable === 'rapido') {
            text += '<p><strong>• Passos Recomendados (5 min):</strong> Protetor com cor + Corretivo pontual + Máscara de Cílios + Balm labial.</p>';
        } else if (timeAvailable === 'medio') {
            text += '<p><strong>• Passos Recomendados (15 min):</strong> Skincare + Primer + Base Leve + Corretivo + Pó + Máscara de Cílios + Batom.</p>';
        } else {
            text += '<p><strong>• Passos Recomendados (30 min+):</strong> Skincare Completo + Primer + Base Alta Cobertura + Contorno + Iluminador + Esfumado nos Olhos + Batom Especial.</p>';
        }

        resultContent.innerHTML = text;
        quizForm.style.display = 'none';
        quizResult.style.display = 'block';
    });
}

if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        quizForm.reset();
        document.getElementById('q2').classList.remove('active');
        document.getElementById('q1').classList.add('active');
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
        quizForm.style.display = 'block';
        quizResult.style.display = 'none';
        currentStep = 1;
    });
}

// --- LÓGICA DO PROVADOR VIRTUAL DE BATOM ---
function changeLipColor(color, name) {
    const lipShape = document.getElementById('lip-shape');
    const colorName = document.getElementById('color-name');

    if (lipShape && colorName) {
        lipShape.style.color = color;
        colorName.textContent = `Tom Selecionado: ${name}`;
    }
}