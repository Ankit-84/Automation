import express from "express"
import sum from "./sum.js"
const app = express()
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/home", async (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.get("/sum/:a/:b", async (req, res) => {
    const { a, b } = req.params;
    res.json({
        ans : sum(Number(a), Number(b))
    })
}  )     
