export interface vendacanalmarca
{
    IDCANALMARCA:number;    
    DESC_CANAL:string;
    MARCA:string;
    CANAL_SIGLA:string;
    DATA:Date;
    PREVISAO:number;
    TM:number;
    TC:number;
    PA:number;
    PM:number;
    NUMTICKETS:number;
    VLF:number;
    QLF:number;
    VLPEDIDO:number;
    QLPEDIDO:number;

}

export interface vendamarca
{            
    MARCA:string;        
    PREVISAO:number;
    TM:number;    
    PA:number;
    VLF:number;    
}