export function selectDomain(appState) {
  let example = appState.example;
  return example.domain;
}

export function selectLocation(appState) {
  let example = appState.example;
  return example.location;
}