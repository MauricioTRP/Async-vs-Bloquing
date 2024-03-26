console.log("Proceso para pedir una pizza, sync/async Programming")

document.getElementById("syncCase").addEventListener("click", () => {
  llamarPizzeriaSync(()=> {
    ordenarPizzaSync(() => {
      esperarPizzaSync(() => {
        recibirPizzaSync(() => {
          ordenarMesaSync(() => {
            comerPizzaSync()
          })
        })
      })
    })
  })
})

document.getElementById("asyncCase").addEventListener("click", () => {
  llamarPizzeria(()=> {
    ordenarPizza(() => {
      esperarPizza(() => {
        recibirPizza(() => {
          ordenarMesa(() => {
            comerPizza(alert("Esta rebwena"))
          })
        })
      })
    })
  })
})

function delayBlock(ms, callback) {
  let start = Date.now();
  now = start;

  while (now - start < ms) {
    now = Date.now()
    // wait
  }
  callback();
}

function llamarPizzeriaSync(callback) {
  console.log("Llamando al restaurante 📱")
  delayBlock(Math.random() * 10000, callback)
}

function ordenarPizzaSync(callback) {
  console.log("Hola, quiero una pizza 🍕 cuadruple queso 🧀, a la casa del Mauro 🧔");
  delayBlock(Math.random() * 10000, callback)
}

function esperarPizzaSync(callback) {
  console.log("Estoy esperando todavía mi picsa 🍕 🥱");
}

function recibirPizzaSync(callback) {
  console.log("Gracias por la picsa 🫂, ahora a comer 😋 🍕")
  delayBlock(Math.random() * 10000, callback)
}

function ordenarMesaSync(callback) {
  console.log("Ordenando 👆 para comer la picsa 🍕");
  delayBlock(Math.random() * 10000, callback)
}

function comerPizzaSync(callback) {
  console.log("Al fin a comer la picsa 🍽️ 🍕")
  delayBlock(Math.random() * 10000, callback)
}

function llamarPizzeria(callback) {
  setTimeout(() => {
    console.log("Llamando al restaurante 📱")

    callback();
  }, Math.random() * 10000)
}

function ordenarPizza(callback) {
  setTimeout(() => {
    console.log("Hola, quiero una pizza 🍕 cuadruple queso 🧀, a la casa del Mauro 🧔");

    callback();
  }, Math.random() * 10000);
}

function esperarPizza(callback) {
  setTimeout(() => {
    console.log("Estoy esperando todavía mi picsa 🍕 🥱");
    callback()
  }, Math.random() * 10000)
}

function recibirPizza(callback) {
  setTimeout(() => {
    console.log("Gracias por la picsa 🫂, ahora a comer 😋 🍕")
    callback()
  }, Math.random() * 10000);
}

function ordenarMesa(callback) {
  setTimeout(() => {
    console.log("Ordenando 👆 para comer la picsa 🍕");
    callback()
  }, Math.random() * 10000)
}

function comerPizza(callback) {
  setTimeout(() => {
    console.log("Al fin a comer la picsa 🍽️ 🍕")
    callback
  })
}

