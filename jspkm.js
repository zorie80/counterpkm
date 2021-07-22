var dano = 0
var dano1 = 0
var dano2 = 0
var dano3 = 0
var dano4 = 0
var dano5 = 0
var vidaatual = 0
var vidaatual1 = 0
var vidaatual2 = 0
var vidaatual3 = 0
var vidaatual4 = 0
var vidaatual5 = 0
function novopkm() {
    dano = 0
    vidaatual = prompt("digite a vida do novo pokemon")
    if (dano<0) {dano=0}
    if (vidaatual<0) {vidaatual=0}
    document.getElementById("dano0").innerHTML = dano ;
    document.getElementById("vida0").innerHTML=vidaatual
    
}
function clicar01 () {
dano=dano+10
vidaatual=vidaatual-10
if (dano<0) {dano=0}
if (vidaatual<0) {vidaatual=0}
    document.getElementById("dano0").innerHTML = dano ;
    document.getElementById("vida0").innerHTML=vidaatual

}
function clicar02 () {
dano=dano-10
vidaatual=vidaatual+10
if (dano<0) {dano=0}
if (vidaatual<0) {vidaatual=0}
    document.getElementById("dano0").innerHTML = dano ;
    document.getElementById("vida0").innerHTML=vidaatual
}
function evoluir () {
    vidaatual = prompt("digite a vida da nova evolucão")
    vidaatual = vidaatual-dano
    if (dano<0) {dano=0}
    if (vidaatual<0) {vidaatual=0}
    document.getElementById("dano0").innerHTML = dano ;
    document.getElementById("vida0").innerHTML=vidaatual
}
function nb1() {
    dano1 = 0
    vidaatual1 = prompt("digite a vida do novo pokemon")
    if (dano1<0) {dano1=0}
    if (vidaatual1<0) {vidaatual1=0}
    document.getElementById("dano1").innerHTML = dano1 ;
    document.getElementById("vida1").innerHTML=vidaatual1
    
}
function clicar11 () {
dano1=dano1+10
vidaatual1=vidaatual1-10
    if (dano1<0) {dano1=0}
    if (vidaatual1<0) {vidaatual1=0}
    document.getElementById("dano1").innerHTML = dano1 ;
    document.getElementById("vida1").innerHTML=vidaatual1
}
function clicar12 () {
dano1=dano1-10
vidaatual1=vidaatual1+10
    if (dano1<0) {dano1=0}
    if (vidaatual1<0) {vidaatual1=0}
    document.getElementById("dano1").innerHTML = dano1 ;
    document.getElementById("vida1").innerHTML=vidaatual1
}
function eb1 () {
    vidaatual1 = prompt("digite a vida da nova evolucão")
    vidaatual1 = vidaatual1-dano1
    if (dano1<0) {dano1=0}
    if (vidaatual1<0) {vidaatual1=0}
    document.getElementById("dano1").innerHTML = dano1 ;
    document.getElementById("vida1").innerHTML=vidaatual1
}
function nb2() {
    dano2 = 0
    vidaatual2 = prompt("digite a vida do novo pokemon")
    if (dano2<0) {dano2=0}
    if (vidaatual2<0) {vidaatual2=0}
    document.getElementById("dano2").innerHTML = dano2 ;
    document.getElementById("vida2").innerHTML=vidaatual2
    
}
function clicar21 () {
dano2=dano2+10
vidaatual2=vidaatual2-10
if (dano2<0) {dano2=0}
    if (vidaatual2<0) {vidaatual2=0}
    document.getElementById("dano2").innerHTML = dano2 ;
    document.getElementById("vida2").innerHTML=vidaatual2
}
function clicar22 () {
dano2=dano2-10
vidaatual2=vidaatual2+10
if (dano2<0) {dano2=0}
    if (vidaatual2<0) {vidaatual2=0}
    document.getElementById("dano2").innerHTML = dano2 ;
    document.getElementById("vida2").innerHTML=vidaatual2
}
function eb2 () {
    vidaatual2 = prompt("digite a vida da nova evolucão")
    vidaatual2 = vidaatual2-dano2
    if (dano2<0) {dano2=0}
    if (vidaatual2<0) {vidaatual2=0}
    document.getElementById("dano2").innerHTML = dano2 ;
    document.getElementById("vida2").innerHTML=vidaatual2
}
function nb3() {
    dano3 = 0
    vidaatual3 = prompt("digite a vida do novo pokemon")
    if (dano3<0) {dano3=0}
    if (vidaatual3<0) {vidaatual3=0}
    document.getElementById("dano3").innerHTML = dano3 ;
    document.getElementById("vida3").innerHTML=vidaatual3
    
}
function clicar31 () {
dano3=dano3+10
vidaatual3=vidaatual3-10
if (dano3<0) {dano3=0}
    if (vidaatual3<0) {vidaatual3=0}
    document.getElementById("dano3").innerHTML = dano3 ;
    document.getElementById("vida3").innerHTML=vidaatual3
}
function clicar32 () {
dano3=dano3-10
vidaatual3=vidaatual3+10
if (dano3<0) {dano3=0}
    if (vidaatual3<0) {vidaatual3=0}
    document.getElementById("dano3").innerHTML = dano3 ;
    document.getElementById("vida3").innerHTML=vidaatual3
}
function eb3 () {
    vidaatual3 = prompt("digite a vida da nova evolucão")
    vidaatual3 = vidaatual3-dano3
    if (dano3<0) {dano3=0}
    if (vidaatual3<0) {vidaatual3=0}
    document.getElementById("dano3").innerHTML = dano3 ;
    document.getElementById("vida3").innerHTML=vidaatual3
}
function nb4() {
    dano4 = 0
    vidaatual4 = prompt("digite a vida do novo pokemon")
    if (dano4<0) {dano4=0}
    if (vidaatual4<0) {vidaatual4=0}
    document.getElementById("dano4").innerHTML = dano4 ;
    document.getElementById("vida4").innerHTML=vidaatual4
    
}
function clicar41 () {
dano4=dano4+10
vidaatual4=vidaatual4-10
if (dano4<0) {dano4=0}
    if (vidaatual4<0) {vidaatual4=0}
    document.getElementById("dano4").innerHTML = dano4 ;
    document.getElementById("vida4").innerHTML=vidaatual4
}
function clicar42 () {
dano4=dano4-10
vidaatual4=vidaatual4+10
if (dano4<0) {dano4=0}
    if (vidaatual4<0) {vidaatual4=0}
    document.getElementById("dano4").innerHTML = dano4 ;
    document.getElementById("vida4").innerHTML=vidaatual4
}
function eb4 () {
    vidaatual4 = prompt("digite a vida da nova evolucão")
    vidaatual4 = vidaatual4-dano4
    if (dano4<0) {dano4=0}
    if (vidaatual4<0) {vidaatual4=0}
    document.getElementById("dano4").innerHTML = dano4 ;
    document.getElementById("vida4").innerHTML=vidaatual4
}
function nb5() {
    dano5 = 0
    vidaatual5 = prompt("digite a vida do novo pokemon")
    if (dano5<0) {dano5=0}
    if (vidaatual5<0) {vidaatual5=0}
    document.getElementById("dano5").innerHTML = dano5 ;
    document.getElementById("vida5").innerHTML=vidaatual5
    
}
function clicar51 () {
dano5=dano5+10
vidaatual5=vidaatual5-10
if (dano5<0) {dano5=0}
    if (vidaatual5<0) {vidaatual5=0}
    document.getElementById("dano5").innerHTML = dano5 ;
    document.getElementById("vida5").innerHTML=vidaatual5
}
function clicar52 () {
dano5=dano5-10
vidaatual5=vidaatual5+10
if (dano5<0) {dano5=0}
    if (vidaatual5<0) {vidaatual5=0}
    document.getElementById("dano5").innerHTML = dano5 ;
    document.getElementById("vida5").innerHTML=vidaatual5
}
function eb5 () {
    vidaatual5 = prompt("digite a vida da nova evolucão")
    vidaatual5 = vidaatual5-dano5
    if (dano5<0) {dano5=0}
    if (vidaatual5<0) {vidaatual5=0}
    document.getElementById("dano5").innerHTML = dano5 ;
    document.getElementById("vida5").innerHTML=vidaatual5
}

