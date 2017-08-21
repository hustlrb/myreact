/**
 * Created by yangyang on 2017/6/28.
 */

export function selectDomain(appState) {
  let config = appState.config
  return config.domain
}

export function selectLocation(appState) {
  let config = appState.config
  return config.location
}