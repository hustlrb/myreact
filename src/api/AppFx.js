import sleep from '../util/sleep';

export async function login(payload) {
  try {
    await sleep(5000);
    return {loggedIn: true};
  } catch (e) {
    return {loggedIn: false};
  }
}

export async function logout(payload) {
  try {
    await sleep(500);
    return {loggedIn: false};
  } catch (e) {
    return {loggedIn: true};
  }
}
