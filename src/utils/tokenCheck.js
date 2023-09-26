export function jwtCheck() {
  if (localStorage.getItem("userToken") === null) {
    return true;
  }
  return false;
}
