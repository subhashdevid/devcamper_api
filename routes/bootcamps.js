//get
app.get("/api/v1/bootcamps", (req, res) => {
    res.status(200).json({ success: true, msg: "show all bootcamps" });
  });
  
  //get by id
  app.get("/api/v1/bootcamps/:id", (req, res) => {
      res
        .status(200)
        .json({ success: true, msg: `get bootcamps ${req.params.id}` });
    });
  
  
  //post
  app.post("/api/v1/bootcamps", (req, res) => {
    res.status(200).json({ success: true, msg: "Create new bootcamps" });
  });
  //put
  app.put("/api/v1/bootcamps/:id", (req, res) => {
    res
      .status(200)
      .json({ success: true, msg: `Update bootcamps ${req.params.id}` });
  });
  
  //delete
  
  //put
  app.delete("/api/v1/bootcamps/:id", (req, res) => {
      res
        .status(200)
        .json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
    });