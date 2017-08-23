import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiveretailProvider } from "../../providers/liveretail/liveretail";
import { vendacanalmarca } from "../../app/modal";
import { vendamarca } from "../../app/modal";

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

  public vendas_retail: vendacanalmarca[];
  public venda_rede: vendamarca[];
  public getUrl: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private LiveretailProvider: LiveretailProvider
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2)
  }

  ionViewDidLoad() {
    var itensList = [];
    this.LiveretailProvider.getUrl();
    this.LiveretailProvider.getConsultaCLienteVarejo().subscribe(
      data => {
        const response = (data as any);
        const obj_return = JSON.parse(response._body);
        this.vendas_retail = obj_return;
        let list: string[] = ["BOBÔ", "DUDALINA", "JOHN JOHN", "LE LIS BLANC DEUX", "ROSA CHA", "ESTOQUE"];
        let MARCA: string;
        let PREVISAO: number;
        let TM: number;
        let PA: number;
        let VLF: number;


        for (let item of list) {
          PREVISAO = 0;
          TM = 0;
          PA = 0;
          VLF = 0;
          var collection = this.vendas_retail.filter(x => {
            return x.MARCA == item && x.CANAL_SIGLA != "APE"
          });

          for (let i of collection) {
            MARCA = i.MARCA;
            PREVISAO += i.PREVISAO;
            TM += i.TM;
            PA += i.PA;
            VLF += i.VLF;
          }
          let p: vendamarca;
          p = {
            MARCA,
            PREVISAO,
            TM,
            PA,
            VLF,
          }

          itensList.push.apply(p);
           
        }
        this.venda_rede = itensList; 
        console.log("Saida lista" +  this.venda_rede);       
      }, error => {
        console.log(error);
      }
    ) 
     
  }

}
