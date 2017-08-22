export function selectDomain(appState) {
  let about = appState.about;
  return about.domain;
}

export function selectLocation(appState) {
  let about = appState.about;
  return about.location;
}