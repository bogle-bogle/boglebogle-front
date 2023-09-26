export function jwtCheck() {
  console.log("asdlkjalksjd");
  if (localStorage.getItem("userToken") === null) {
    return true;
  }
  return false;
}
