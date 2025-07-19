package com.t4g.cnb.search.eval;

import com.day.cq.search.Predicate;
import com.day.cq.search.eval.EvaluationContext;
import com.day.cq.search.eval.JcrPropertyPredicateEvaluator;
import org.osgi.service.component.annotations.Component;

@Component(
  service = JcrPropPredicateEvaluator.class,
  factory = "com.day.cq.search.eval.PredicateEvaluator/prop",
  immediate = true
)
public class JcrPropPredicateEvaluator extends JcrPropertyPredicateEvaluator {

  public static final String PROP = "prop";

  @Override
  public String getXPathExpression(Predicate p, EvaluationContext context) {
    if (p.hasNonEmptyValue(VALUE)) {
      return getXPathExpression(p.get(PROP), p.get(VALUE), p.get(OPERATION));
    }
    return null;
  }
}
