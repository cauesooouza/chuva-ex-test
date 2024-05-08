import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    assunto: new FormControl(''),
    conteudo: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      assunto: [''],
      conteudo: ['']
    })
  }

  novosTopicos: any[] = []

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.topicoCriado = !this.topicoCriado;
    this.topicoEnviado = !this.topicoEnviado;

    this.novosTopicos.push(this.form.value)

    this.form.reset();
  }


  mostrarTexto = false;
  criarTopico = true;
  topicoCriado = false;
  topicoEnviado = false;
  mostraResposta = false;
  topicos = [
    {
      titulo: "Titulo 02",
      autor: "Jane doe",
      mensagem: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime incidunt est quae praesentium excepturi quibusdam aliquid ratione neque porro impedit suscipit rerum fugit facere repellendus, architecto nam? Itaque, quo quae.",
      like: 2,
      mostraResposta: false,
      resposta: [
        {
          nome: "Adriabi da silva",
          mensagem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae debitis quasi illum omnis aspernatur sint, ipsum ratione natus? Autem optio eos quibusdam saepe. Quod facilis minus tempora distinctio eum!",
          autor: true,
          coAutor: false
        },
        {
          nome: "Jane doe",
          mensagem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae debitis quasi illum omnis aspernatur sint, ipsum ratione natus? Autem optio eos quibusdam saepe. Quod facilis minus tempora distinctio eum!",
          autor: false,
          coAutor: false,
        },
        {
          nome: "Carmila Ferreira",
          mensagem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae debitis quasi illum omnis aspernatur sint, ipsum ratione natus? Autem optio eos quibusdam saepe. Quod facilis minus tempora distinctio eum!",
          autor: false,
          coAutor: true
        },
        {
          nome: "Ana Carolina",
          mensagem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae debitis quasi illum omnis aspernatur sint, ipsum ratione natus? Autem optio eos quibusdam saepe. Quod facilis minus tempora distinctio eum!",
          autor: false,
          coAutor: true
        },
      ]
    },
    {
      titulo: "Titulo 02",
      autor: "Jane doe",
      mensagem: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime incidunt est quae praesentium excepturi quibusdam aliquid ratione neque porro impedit suscipit rerum fugit facere repellendus, architecto nam? Itaque, quo quae.",
      like: 2,
      mostraResposta: false,
      resposta: [
        {
          nome: "Adriabi da silva",
          mensagem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae debitis quasi illum omnis aspernatur sint, ipsum ratione natus? Autem optio eos quibusdam saepe. Quod facilis minus tempora distinctio eum!",
          autor: true,
          coAutor: false
        },
        {
          nome: "Jane doe",
          mensagem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae debitis quasi illum omnis aspernatur sint, ipsum ratione natus? Autem optio eos quibusdam saepe. Quod facilis minus tempora distinctio eum!",
          autor: false,
          coAutor: false,
        },
        {
          nome: "Carmila Ferreira",
          mensagem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae debitis quasi illum omnis aspernatur sint, ipsum ratione natus? Autem optio eos quibusdam saepe. Quod facilis minus tempora distinctio eum!",
          autor: false,
          coAutor: true
        },
        {
          nome: "Ana Carolina",
          mensagem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae debitis quasi illum omnis aspernatur sint, ipsum ratione natus? Autem optio eos quibusdam saepe. Quod facilis minus tempora distinctio eum!",
          autor: false,
          coAutor: true
        },
      ]
    },
  ]


  clickMostraResposta(topico: { mostraResposta: boolean }) {
    topico.mostraResposta = !topico.mostraResposta;
  }


}
