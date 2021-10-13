const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order["delivery"].deliveryPerson; //Ana silveira
    const phoneNumber = order["phoneNumber"]; //Telefone
    const name = order["name"]; //Rafaela
    const number = order["address"].number; // 389
    const street = order["address"].street;  //Rua das Flores
    const apto = order["address"].apartment; //701
    console.log("Olá"+" "+deliveryPerson+", "+"entrega para:"+ " "+ name + "," + "Telefone:" + " " + phoneNumber + ", R. " + street +", Nº: "+number+ ", AP: "+ apto)
    //"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
  const name = order.name = "Luiz Silva"
  const pizza = Object.keys(order.order.pizza);
  const payment = order.order.payment = 50;
  const drink = order.order.drinks.coke.type;
  console.log("Olá " + name + ", o total do seu pedido de " + pizza[0] + ", " + pizza[1] + " e " + drink + "é R$" + payment + ",00.");
  //"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
  }
  
  orderModifier(order);