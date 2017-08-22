import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiveretailProvider } from "../../providers/liveretail/liveretail";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    LiveretailProvider
  ]
})
export class FeedPage {
  public objeto_liveretail = {
    REDE:"LE LIS BLANC DEUX",
    QLF:1,
    VLF:445.83,
    VALORPREVISAO:1073279,
    NUM_LOJAS:102,
    NUM_CLIENTES:3,
    NUM_TICKETS:3,
    IMG:"assets/img/lelis.png"

  }

  public vendas_retail = new Array<any>();

  public nomeUser:string = "Marcelo Santos - Codigo";   
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private LiveretailProvider: LiveretailProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2)
      }

  ionViewDidLoad() {
    this.LiveretailProvider.getDadosVendas().subscribe(
      data=>{
        const response = (data as any);
        const obj_return = JSON.parse(response._body);
        this.vendas_retail = obj_return;
        console.log(this.vendas_retail); 

      }, error => {
        console.log(error);
      }
    )
    
  }

}
