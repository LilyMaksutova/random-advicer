const adviceURL = "https://api.adviceslip.com/advice";
export function getAdvice() {
  return fetch(adviceURL).then((response) => {
    return response.json();
  });
}
