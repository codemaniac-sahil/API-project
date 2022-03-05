async function getdata(){
    const response=await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();
    
    const rows=data.split("\n").slice(1);
    rows.forEach(elt => {
        const row=elt.split(",")
        const year=row[0];
        xlabel.push(year)
        
        const temp=row[1]
        ytemps.push(parseFloat( temp)+14)
        
    });

}
getdata();