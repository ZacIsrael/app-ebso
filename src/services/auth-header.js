export default function authHeader() {
  const ebsoResponse = JSON.parse(localStorage.getItem('ebsoResponse'));

  if (ebsoResponse && ebsoResponse.idToken) {
    return { Authorization: 'Bearer ' + ebsoResponse.header.token }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}