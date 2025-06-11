require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const cors = require("cors");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
app.use(cors()); // For cross-origin requests
app.use(express.json()); // ✅ Parses JSON request bodies

// creating route for dummy data/ default data
// app.get("/addHoldings", async (req, res) => {

//   let tempHoldings=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHoldings.forEach(async (item) => {
//   let newHolding=new HoldingsModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,

//   });
//   await newHolding.save();
// });

//   res.status(200).send("Holdings added successfully");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//    {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//     {
//     product: "ITC",
//     name: "ITC",
//     qty: 3,
//     avg: 3164.75,
//     price: 1800.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//   tempPositions.forEach(async (item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss || false, // Default to false if not provided
//     });
//     await newPosition.save();
//   });

//   res.status(200).send("Positions added successfully");
// });

//fetch all holdings from DB
app.get("/allHoldings", async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.status(200).json(holdings);
});

app.get("/allPositions", async (req, res) => {
  const positions = await PositionsModel.find({});
  res.status(200).json(positions);
});

// Add a new order

app.post("/newOrder", async (req, res) => {
  // console.log("REQ BODY:", req.body); // 👀 Debug
  // if (!req.body.name) {
  //   return res.status(400).json({ error: "Missing 'name' in body" });
  // }
  //   let newOrder = new OrdersModel({
  //     name: req.body.name,
  //     qty: req.body.qty,
  //     price: req.body.price,
  //     mode: req.body.mode,
  //   });
  //   await newOrder.save();
  //   res.status(200).send("Order added successfully");
  // });
  const { name, qty, price, mode } = req.body;

  try {
    // 1. Save order
    let newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // 2. Update Holdings
    const existing = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (existing) {
        const totalQty = existing.qty + qty;
        const totalCost = existing.avg * existing.qty + price * qty;
        const newAvg = totalCost / totalQty;

        existing.qty = totalQty;
        existing.avg = newAvg;
        existing.price = price; // LTP (latest price)
        await existing.save();
      } else {
        await HoldingsModel.create({ name, qty, avg: price, price });
      }
    } else if (mode === "SELL") {
      if (!existing || existing.qty < qty) {
        return res.status(400).json({ error: "Not enough quantity to sell" });
      }

      existing.qty -= qty;
      existing.price = price; // Update LTP

      if (existing.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await existing.save();
      }
    }

    res.status(200).send("Order placed and holdings updated");
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).send("Internal Server Error");
  }
});

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

// Start the server only after connecting to the database .then

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
