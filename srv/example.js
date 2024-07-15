module.exports = async (srv) =>
{
    srv.on('greet', (req,res)=>
    {   return "good evening " + req.data.name;

    })
    srv.on('add', (req,res)=>
    {
    let c = req.data.a + req.data.b;
    return c;
    
    })
}