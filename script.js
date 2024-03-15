let vp
let vt=Number(prompt("Qual é o valor total? "))
let fp=Number(prompt("Qual a forma de pagamento? "+"\n"+
             "Digite 1 para DINHEIRO (À vista)"+"\n"+
             "Digite 2 para DÉBITO (À vista)"+"\n"+
             "Digite 3 para CRÉDITO (À vista)"+"\n"+
             "Digite 4 para DÉBITO (Até 3x)"+"\n"+
             "Digite 5 para DÉBITO (Acima de 3x)"+"\n"))

if (fp==4||fp==5) {
  vp=Number(prompt("Informe a quantidade de parcelas: "))
}
if (fp==1) {
  vt=vt*0.9 // DINHEIRO desconto de 10%
  alert("Valor com 10% de desconto: "+vt)
}
else if (fp==2) {
  vt=vt*0.92 // DEBITO desconto de 8%
  alert("Valor com 8% de desconto: "+vt)
} 
else if (fp==3) {
  vt=vt*0.95 // CREDITO desconto de 5%
  alert("Valor com 5% de desconto: "+vt)
}
else if (fp==4&&vp<=3) {
  alert("Valor das parcelas: "+vt/vp) // DEBITO sem juros
}
else if (fp==5&&vp>3) {
 vt=vt*1.04 // DEBITO acréscimo de 4%
 alert("Valor das parcelas: "+vt/vp)
}