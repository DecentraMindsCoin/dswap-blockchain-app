const main = async () => {

    //Get contract from factory
    const transactionFactory = await hre.ethers.getContractFactory('Transactions')
    //Get transaction from from contract fcatory above.
    const transactionContract = await transactionFactory.deploy()
    // Await deployed response that we get back.
    await transactionContract.deployed()
  
    console.log('Transactions deployed to:', transactionContract.address)
  }
  // IIFE Immediately Invoked functional expression, anonymous function calling it immediatly 
  ;(async () => {
      //await the main function try catch for error 0 for fulfilled success 1 for rejected error.
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  })()