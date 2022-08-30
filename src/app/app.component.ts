import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto';
  public imagen: string = 'https://s1.eestatic.com/2022/08/13/deportes/futbol/695190542_226427067_1024x576.jpg'
  public imagenList1: string = 'https://www.diez.hn/binrepository/yuyuy_2197406_20220812122328.png'
  public imagenList2: string = 'https://www.diez.hn/binrepository/jjj_2197408_20220812122329.png'
  public imagenList3: string = 'https://www.diez.hn/binrepository/glg_2197410_20220812122330.png'
  public imagenList4: string = 'https://www.diez.hn/binrepository/nnnn_2197412_20220812122331.png'
  public imagenList5: string = 'https://www.diez.hn/binrepository/ddd_2197437_20220812122909.png'
  public imagenList6: string = 'https://www.diez.hn/binrepository/aaaffaf_2197503_20220812123747.png'
  public alto: number = 425
  public ancho: number = 950;
  public color : string = "";
  public mostrar: boolean = true;
  public scroll: number = 0;

  public eventoBoton(event: Event): void {
    console.log(event);
    alert('Este Boton No Era Jeje');
  }
  public capturarAlto(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }

  public capturarAncho(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.ancho = valor;
  }
  public capturarColor (event: Event): void{
    const color = (event.target as HTMLInputElement).value;
    this.color = color;
  }

  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }

}
