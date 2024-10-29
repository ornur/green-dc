"use server";

export async function calculate(formData: FormData) {
  //Annual Energy Offset=Wind Power Capacity×Operational Efficiency×Hours in a Year
  // Annual Cost Savings=Annual Energy Offset×Electricity Cost per kWh
  // CO₂ Reduction (tons)=Annual Energy Offset×Carbon Emission Factor
  // ROI (%)=( (Annual Cost Savings−Annual Maintenance Cost)/Initial Investment Cost )×100
  // Payback Period (years)= Initial Investment Cost/Annual Cost Savings−Annual Maintenance Cost

  const aec = formData.get("aec") ? Number(formData.get("aec")) : null;
  const wpc = formData.get("wpc") ? Number(formData.get("wpc")) : null;
  const op = formData.get("op") ? Number(formData.get("op")) : null;
  const iic = formData.get("iic") ? Number(formData.get("iic")) : null;
  const amc = formData.get("amc") ? Number(formData.get("amc")) : null;
  const ec = formData.get("ec") ? Number(formData.get("ec")) : null;
  const cef = formData.get("cef") ? Number(formData.get("cef")) : null;

  if (
    aec === null ||
    wpc === null ||
    op === null ||
    iic === null ||
    amc === null ||
    ec === null ||
    cef === null
  ) {
    throw new Error("All fields are required and must be valid numbers.");
  } else{
    console.log(aec, wpc, op, iic, amc, ec, cef);
  }

  const annualEnergyOffset = wpc * op/100 * 8760;
  const annualCostSavings = annualEnergyOffset * ec;
  const co2Reduction = annualEnergyOffset * cef;
  const roi = ((annualCostSavings - amc) / iic) * 100;
  const paybackPeriod = iic / (annualCostSavings - amc);

  return {
    annualEnergyOffset,
    annualCostSavings,
    co2Reduction,
    roi,
    paybackPeriod,
  };
}
