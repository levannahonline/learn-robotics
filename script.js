async function loadResources() {
  const media = document.getElementById('media').value;
  const difficulty = document.getElementById('difficulty').value;
  const topic = document.getElementById('topic').value;

  const res = await fetch('resources.json');
  const allResources = await res.json();

  const filtered = allResources.filter(r => {
    return (!media || r.media === media) &&
           (!difficulty || r.difficulty === difficulty) &&
           (!topic || r.topic.includes(topic));
  });

  const results = document.getElementById('results');
  results.innerHTML = '';
  filtered.forEach(r => {
    results.innerHTML += `<p><a href="${r.url}" target="_blank">${r.title}</a> — ${r.media}, ${r.difficulty}, ${r.topic.join(', ')}</p>`;
  });
}

document.querySelectorAll('select').forEach(s => {
  s.addEventListener('change', loadResources);
});

window.onload = loadResources;
