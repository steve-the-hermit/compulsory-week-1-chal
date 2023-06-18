function calculateSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
    
    // KRA Tax Rates
    const taxRanges = [
      { min: 0, max: 12198, rate: 0 },
      { min: 12199, max: 23885, rate: 10 },
      { min: 23886, max: 35472, rate: 15 },
      { min: 35473, max: 47059, rate: 20 },
      { min: 47060, max: 58646, rate: 25 },
      { min: 58647, max: Infinity, rate: 30 }
    ];
    
    // NHIF Contribution Rates
    const nhifRanges = [
      { min: 0, max: 5999, contribution: 150 },
      { min: 6000, max: 7999, contribution: 300 },
      { min: 8000, max: 11999, contribution: 400 },
      { min: 12000, max: 14999, contribution: 500 },
      { min: 15000, max: 19999, contribution: 600 },
      { min: 20000, max: 24999, contribution: 750 },
      { min: 25000, max: 29999, contribution: 850 },
      { min: 30000, max: 34999, contribution: 900 },
      { min: 35000, max: 39999, contribution: 950 },
      { min: 40000, max: 44999, contribution: 1000 },
      { min: 45000, max: 49999, contribution: 1100 },
      { min: 50000, max: 59999, contribution: 1200 },
      { min: 60000, max: 69999, contribution: 1300 },
      { min: 70000, max: 79999, contribution: 1400 },
      { min: 80000, max: 89999, contribution: 1500 },
      { min: 90000, max: 99999, contribution: 1600 },
      { min: 100000, max: 109999, contribution: 1700 },
      { min: 110000, max: 119999, contribution: 1800 },
      { min: 120000, max: 129999, contribution: 1900 },
      { min: 130000, max: 139999, contribution: 2000 },
      { min: 140000, max: 149999, contribution: 2100 },
      { min: 150000, max: Infinity, contribution: 2200 }
    ];
    
    // NSSF Contribution Rates
    const nssfRates = { employee: 6, employer: 6 };
    
    // Calculate Payee Tax
    let taxableAmount = basicSalary + benefits;
    let payeeTax = 0;
    
    for (let i = 0; i < taxRanges.length; i++) {
      if (taxableAmount > taxRanges[i].max) {
        payeeTax += (taxRanges[i].max - taxRanges[i].min) * (taxRanges[i].rate / 100);
      } else {
        payeeTax += (taxableAmount - taxRanges[i].min) * (taxRanges[i].rate / 100);
        break;
      }
    }
    
    // Calculate NHIF Deduction
    let nhifDeduction = 0;
    
    for (let i = 0; i < nhifRanges.length; i++) {
      if (taxableAmount > nhifRanges[i].max) {
        nhifDeduction = nhifRanges[i].contribution;
      } else {
        break;
      }
    }
    
    // Calculate NSSF Deduction
    let nssfDeduction = (basicSalary + benefits) * (nssfRates.employee / 100);
    
    // Calculate Net Salary
    let netSalary = basicSalary + benefits - payeeTax - nhifDeduction - nssfDeduction;
    
    // Output the results
    document.getElementById('payeeTax').textContent = payeeTax.toFixed(2);
    document.getElementById('nhifDeduction').textContent = nhifDeduction.toFixed(2);
    document.getElementById('nssfDeduction').textContent = nssfDeduction.toFixed(2);
    document.getElementById('netSalary').textContent = netSalary.toFixed(2);
  }
  