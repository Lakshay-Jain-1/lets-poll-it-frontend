export default function Texttospeech(data){
    let utterance = new SpeechSynthesisUtterance(`${data}`);
    speechSynthesis.speak(utterance);

}