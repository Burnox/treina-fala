//referências
const start = document.querySelector('#startBtn')
const stop = document.querySelector('#stopBtn')
const elementoTranscricao = document.querySelector('#transcricao')

// Inicializando a transcrição
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)()
recognition.lang = 'fr-FR'
recognition.continuous = true
let transcricao = ''

// Evento disparado quando a transcrição é iniciada
start.addEventListener('click', () => {
  recognition.start()
  transcricao = '' //Reiniciando a transcrição ao iniciar
})

// Evento disparado quando a transcrição é finalizada
stop.addEventListener('click', () => {
  recognition.stop()
  elementoTranscricao.innerHTML = `
          <div>Sua leitura:</div>
          <span class="box-transcricao">${transcricao}</span>
      `
})

// Evento disparado quando a transcrição reconhece um trecho de fala
recognition.onresult = evento => {
  const fala = evento.results[0][0].transcript
  transcricao += fala + ' '
}

// //Assim que a página carregar a configuração de voz já estará ativa
// window.SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition

// //Instanciado o reconhecimento de voz
// const recognition = new SpeechRecognition()
// recognition.lang = 'fr-FR'
// recognition.start()

//Evento que exibe a mensagem assim que for detectado uma fala
// recognition.addEventListener('result', onSpeak)

// function onSpeak(fala) {
//   //Dentro da variável results, existe um array 0, dentro dele outro array 0, por fim uma variável transcript onde está o resultado da fala.
//   const transcricao = fala.results[0][0].transcript
//   exibeFala(transcricao)
// }

// function exibeFala(transcricao) {
//   elementoFala.innerHTML = `
//         <div>Seu palpite:</div>
//         <span class="box">${transcricao}</span>
//     `
// }

// recognition.addEventListener('end', () => recognition.start())
