function hideTenantDetail() {
    var tOne = getElementById('t1');
    var tTwo = getElementById('t2');
    var tThree = getElementById('t3');
    var tFour = getElementById('t4');
    var tFive = getElementById('t5');
    var tSix = getElementById('t6');
    
    //All TenantsID Variables are assigned to an Array
    var tDetailsId = [tOne, tTwo, tThree, tFour, tFive, tSix];
    //Function that hides the TenantsID
    tDetailsId.style.display = 'none';


}