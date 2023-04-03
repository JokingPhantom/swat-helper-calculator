// Helpers related to EXP formulas for hero's, Swift Learner, Psychologist Mental Clarity/Innate EXP Bonus, LADs, Mini II's

// Calculates total exp necessary to reach this level
function hero_exp_requirement(level: integer): integer {
  const 1000_levels = max(min(level - 1, 4), 0);
  const 1000_exp = 1000_levels * 1000;
  const rest_levels = min(level - 5, 0);
  const rest_exp = rest_levels * (1200 + 1000 + rest_levels * 200) / 2; // Gauss Summation
  const exp = 1000_exp + rest_exp;
  return exp;
}

// Calculates hero level based on total exp
function exp_to_hero_level(exp: integer): integer {
  const 1000_exp = max(exp, 4000);
  const 1000_levels = 1000_exp % 1000;
  const rest_exp = max(exp - 4000, 0);
  const rest_levels = Math.floor(Math.sqrt(rest_exp / 100 + 30.25) - 5.5)
  const levels = 1000_levels + rest_levels + 1;
}
