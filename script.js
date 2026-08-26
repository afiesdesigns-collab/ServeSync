const liveRegion = document.getElementById('live-region');
function announce(msg) { liveRegion.textContent = msg; }

// ---------- Step navigation ----------
const steps = Array.from(document.querySelectorAll('.step'));

function goToStep(stepNumber) {
  steps.forEach((step) => {
    const isTarget = step.dataset.step === String(stepNumber);
    step.hidden = !isTarget;
  });
  const target = document.getElementById('step-' + stepNumber);
  const heading = target.querySelector('h3');
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    heading.focus();
  }
  announce('Step ' + stepNumber + ' of 5' + (heading ? ': ' + heading.textContent : ''));
}

document.querySelectorAll('.next-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    if (btn.dataset.next === '4') populateSummary();
    goToStep(btn.dataset.next);
  });
});
document.querySelectorAll('.prev-btn').forEach((btn) => {
  btn.addEventListener('click', () => goToStep(btn.dataset.prev));
});

// ---------- Step 1: scan ----------
const scanBtn = document.getElementById('scan-btn');
const equipmentResult = document.getElementById('equipment-result');
const toStep2 = document.getElementById('to-step-2');

scanBtn.addEventListener('click', () => {
  equipmentResult.hidden = false;
  toStep2.disabled = false;
  announce('Equipment identified: FrostZone 3000, Store 482, Line 2.');
  scanBtn.setAttribute('aria-pressed', 'true');
});

// ---------- Step 2: problem category ----------
const problemInputs = document.querySelectorAll('input[name="problem"]');
const toStep3 = document.getElementById('to-step-3');
const leakBanner = document.getElementById('leak-banner');

problemInputs.forEach((input) => {
  input.addEventListener('change', () => {
    toStep3.disabled = false;
    const isLeak = input.value === 'Leak' && input.checked;
    leakBanner.hidden = !isLeak;
    if (isLeak) {
      const urgent = document.getElementById('urgency-urgent');
      urgent.checked = true;
      announce('Leak selected. This case will be flagged as an urgent safety hazard.');
    }
  });
});

// ---------- Step 3: file upload ----------
const uploadInput = document.getElementById('upload-input');
const fileList = document.getElementById('file-list');

uploadInput.addEventListener('change', () => {
  fileList.innerHTML = '';
  Array.from(uploadInput.files).forEach((file) => {
    const li = document.createElement('li');
    li.textContent = file.name + ' (' + Math.round(file.size / 1024) + ' KB)';
    fileList.appendChild(li);
  });
  announce(uploadInput.files.length + ' file' + (uploadInput.files.length === 1 ? '' : 's') + ' attached.');
});

// ---------- Step 4: review ----------
function populateSummary() {
  const problem = document.querySelector('input[name="problem"]:checked');
  const urgency = document.querySelector('input[name="urgency"]:checked');
  const notes = document.getElementById('notes').value.trim();

  document.getElementById('summary-problem').textContent = problem ? problem.value : 'Not selected';
  document.getElementById('summary-notes').textContent = notes || 'None provided';
  document.getElementById('summary-files').textContent = uploadInput.files.length;
  document.getElementById('summary-urgency').textContent = urgency ? urgency.value : 'Medium';
}

// ---------- Submit ----------
const form = document.getElementById('report-form');
const timelineSection = document.getElementById('timeline-section');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const caseNumber = 'SS-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('case-number').textContent = 'Case #' + caseNumber;
  goToStep(5);
  timelineSection.hidden = false;
  announce('Case ' + caseNumber + ' submitted. Estimated first response within 30 minutes.');
});

// ---------- Case timeline simulation ----------
const timelineItems = Array.from(document.querySelectorAll('#case-timeline li'));
const advanceBtn = document.getElementById('advance-btn');

function setStageState(li, state) {
  li.classList.remove('done', 'current', 'upcoming');
  li.classList.add(state);
  const marker = li.querySelector('.marker');
  const word = li.querySelector('.status-word');
  if (state === 'done') {
    marker.textContent = '✓';
    word.textContent = 'Complete';
  } else if (state === 'current') {
    marker.textContent = li.dataset.stage;
    word.textContent = 'In progress';
  } else {
    marker.textContent = li.dataset.stage;
    word.textContent = 'Upcoming';
  }
}

advanceBtn.addEventListener('click', () => {
  const currentIndex = timelineItems.findIndex((li) => li.classList.contains('current'));
  if (currentIndex === -1 || currentIndex === timelineItems.length - 1) {
    if (currentIndex === timelineItems.length - 1) {
      setStageState(timelineItems[currentIndex], 'done');
      advanceBtn.disabled = true;
      announce('Case closed. All stages complete.');
    }
    return;
  }
  setStageState(timelineItems[currentIndex], 'done');
  setStageState(timelineItems[currentIndex + 1], 'current');
  const heading = timelineItems[currentIndex + 1].querySelector('h4').textContent;
  announce('Status updated: ' + heading + '.');
});
