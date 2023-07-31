const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URL)

const Book = require("./models/book")

async function seed(){
    await Book.create({
        title: "And Away...",
  description: "Bob Mortimer’s life was trundling along happily until suddenly in 2015 he was diagnosed with a heart condition that required immediate surgery and forced him to cancel an upcoming tour. The episode unnerved him, but forced him to reflect on his life so far. This is the framework for his hilarious and moving memoir, And Away…",
  status: "Available",
    })
    await Book.create({
        title: "Zen and the Art of Motorcycle Maintenance",
  description: `"The real cycle you're working on is a cycle called 'yourself." One of the most important and influential books of the past half-century, Robert M. Pirsig's Zen and the Art of Motorcycle Maintenance is a powerful, moving, and penetrating examination of how we live and a meditation on how to live better.`,
  status: "Available",
    })
     await Book.create({
        title: "The New York Trilogy",
  description: "The New York Trilogy is perhaps the most astonishing work by one of America's most consistently astonishing writers. The Trilogy is three cleverly interconnected novels that exploit the elements of standard detective fiction and achieve a new genre that is all the more gripping for its starkness. It is a riveting work of detective fiction worthy of Raymond Chandler, and at the same time a profound and unsettling existentialist enquiry in the tradition of Kafka or Borges.",
  status: "Unavailable",
    })
    console.log("go booky go");
    mongoose.disconnect()
}

seed();