import InvestMentImg from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <div id="header">
      <img src={InvestMentImg} alt="Investment logo of calculator" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
