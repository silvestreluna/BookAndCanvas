function CheckAuth() {
  return !!sessionStorage.getItem('token');
}

export default { CheckAuth };
