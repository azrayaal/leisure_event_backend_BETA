const gethome = (req, res) =>{
    try {
        res.send('GetHome!')
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    gethome
  };