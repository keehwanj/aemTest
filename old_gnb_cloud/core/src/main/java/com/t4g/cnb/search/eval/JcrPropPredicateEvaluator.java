package com.t4g.cnb.search.eval;

import com.day.cq.search.Predicate;
import com.day.cq.search.eval.EvaluationContext;
import com.day.cq.search.eval.JcrPropertyPredicateEvaluator;

/**
 * 
 * @scr.component metatype="no" factory="com.day.cq.search.eval.PredicateEvaluator/prop"
 * 
 **/
public class JcrPropPredicateEvaluator extends JcrPropertyPredicateEvaluator {

  public final static String PROP = "prop";
  @Override
  public String getXPathExpression(Predicate p, EvaluationContext context) {    
    if (p.hasNonEmptyValue(VALUE)) {
      return getXPathExpression(p.get(PROP), p.get(VALUE), p.get(OPERATION));
    }
    return null;
  }
}