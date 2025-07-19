package ca.gnb.women.wagegap;

public class WageGap{

    public int womenNo;
    public int womenDollar;
    public int womenCent;
    public int menNo;
    public int menDollar;
    public int menCent;

    public WageGap(int womenNo, int womenDollar, int womenCent, int menNo,int menDollar,int menCent){
                                this.womenNo=womenNo;
                this.womenDollar=womenDollar;
                this.womenCent=womenCent;
                this.menNo=menNo;
                this.menDollar=menDollar;
                this.menCent=menCent;
    }

   public int getWomenNo(){
       return womenNo;
   }

   public int getWomenDollar(){
       return womenDollar;
   }

   public int getWomenCent(){
       return womenCent;
   }

   public int getMenNo(){
       return menNo;
   }

   public int getMenDollar(){
       return menDollar;
   }

   public int getMenCent(){
       return menCent;
   }

   public double getAverageWomenWage(){
       double value;
       value=(double)getWomenDollar()+((double)getWomenCent()/100);
       return value;
   }    


   public double getAverageMenWage(){
       double value;
       value=(double)getMenDollar()+((double)getMenCent()/100);
       return value;
   }    

   public void setWomenNo(int womenNo ){
       this.womenNo=womenNo; 
   }

   public void setWomenDollar(int womenDollar ){
       this.womenDollar=womenDollar; 
   }

   public void setWomenCent(int womenCent ){
       this.womenCent=womenCent; 
   }


   public void setMenNo(int menNo){
       this.menNo=menNo; 
   }

   public void setMenDollar(int menDollar){
       this.menDollar=menDollar; 
   }

   public void setMenCent(int menCent){
       this.menCent=menCent; 
   }

   public double calculate(){
       double value=10.0;
       value=(getAverageWomenWage()/getAverageMenWage())*100;
       value=100-value;
       return value;
   }    
}
