/* ====================================================
   game-data.js — All 13 levels mapped to PDF Sections 3–18
   ==================================================== */

const LEVELS = [

  /* ──────────────────────────────────────────────
     LEVEL 1 — Section 3: Knowledge Representations
     Mechanic: dragToBin
     ────────────────────────────────────────────── */
  {
    id: 1,
    title: "Knowledge Classifier",
    section: "Section 3 — Knowledge Representations: Facts, Entities & Events",
    description: "Classify each sentence into its correct KRR representation type by dragging it to the right bin.",
    instruction: "Drag each card and drop it onto the matching category bin.",
    mechanic: "dragToBin",
    conceptsLearned: ["Fact", "Entity", "Property / Attribute", "Relationship", "State / Status", "Action / Event"],
    bins: ["Fact", "Entity", "Property", "Relationship", "State / Status", "Action"],
    binCols: 3,
    items: [
      { text: "Ali submitted his application.", answer: "Fact" },
      { text: "Ali is an applicant.", answer: "Entity" },
      { text: "Ali's application is incomplete.", answer: "Property" },
      { text: "Ali applied to the BS Computer Science program.", answer: "Relationship" },
      { text: "Ali's application is pending.", answer: "State / Status" },
      { text: "The officer reviews the application.", answer: "Action" },
      { text: "Ali paid the admission fee.", answer: "Fact" },
      { text: "BS Computer Science is a program.", answer: "Entity" },
      { text: "The application contains two documents.", answer: "Property" },
      { text: "The certificate was submitted by Ali.", answer: "Relationship" },
      { text: "The application is approved.", answer: "State / Status" },
      { text: "The committee approves the application.", answer: "Action" },
    ],
    hints: [
      "A Fact records established, true information (submitted, paid).",
      "An Entity is a named person, object, or program (Ali, BS Computer Science).",
      "A Property describes a characteristic (incomplete, contains).",
      "A Relationship links two entities (applied to, belongs to).",
      "State / Status describes a current condition (pending, approved).",
      "An Action is something an agent performs (reviews, verifies).",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 2 — Section 4: Logical Connectives
     Mechanic: matchPairs
     ────────────────────────────────────────────── */
  {
    id: 2,
    title: "Logic Gate Wiring",
    section: "Section 4 — Logical Connectives & Relationships",
    description: "Connect each keyword or phrase to its correct logical connective type.",
    instruction: "Click a keyword on the left, then click its matching type on the right.",
    mechanic: "matchPairs",
    conceptsLearned: ["Conjunction (AND)", "Disjunction (OR)", "Negation (NOT)", "Conditional (IF)", "Biconditional (IFF)", "Exclusive Alternative", "Joint Negation (NOR)", "Exclusion (NAND)"],
    pairs: [
      { left: "and / both…and", right: "Conjunction" },
      { left: "or / either…or", right: "Disjunction" },
      { left: "not / never / cannot", right: "Negation" },
      { left: "if / whenever", right: "Conditional" },
      { left: "if and only if", right: "Biconditional" },
      { left: "either…or but not both", right: "Exclusive Alternative" },
      { left: "neither…nor", right: "Joint Negation" },
      { left: "not both / cannot have both", right: "Exclusion of Combination" },
    ],
    hints: [
      "'And' / 'both…and' always means Conjunction — both must hold.",
      "'If and only if' is a Biconditional — both directions apply.",
      "'Neither…nor' denies BOTH statements (Joint Negation).",
      "'Not both' means at least one is false (NAND / Exclusion).",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 3 — Section 5: Conditional Expressions
     Mechanic: dragToBin
     ────────────────────────────────────────────── */
  {
    id: 3,
    title: "Condition Architect",
    section: "Section 5 — Conditional Expressions & Requirements",
    description: "Identify the type of conditional expression in each sentence.",
    instruction: "Drag each scenario sentence to the matching condition type.",
    mechanic: "dragToBin",
    conceptsLearned: ["Necessary Condition", "Sufficient Condition", "Exception / Unless", "Alternative Outcome", "Prerequisite", "Dependency"],
    bins: ["Necessary", "Sufficient", "Exception", "Alternative", "Prerequisite", "Dependency"],
    binCols: 3,
    items: [
      { text: "Registration proceeds only if the fee is paid.", answer: "Necessary" },
      { text: "Meeting all eligibility criteria is sufficient to pass the check.", answer: "Sufficient" },
      { text: "Unless the fee is paid by the deadline, the application may be cancelled.", answer: "Exception" },
      { text: "If not verified, the record remains pending.", answer: "Alternative" },
      { text: "The fee must first be paid before registration is finalized.", answer: "Prerequisite" },
      { text: "Final admission depends on meeting all eligibility requirements.", answer: "Dependency" },
      { text: "A valid email must be present for account recovery.", answer: "Necessary" },
      { text: "A valid signed receipt is enough to confirm payment.", answer: "Sufficient" },
      { text: "A late document is accepted except if the policy forbids extensions.", answer: "Exception" },
      { text: "Failing that, the applicant may be asked to reapply.", answer: "Alternative" },
      { text: "Prior completion of identity verification is required.", answer: "Prerequisite" },
      { text: "Approval is subject to committee review.", answer: "Dependency" },
    ],
    hints: [
      "'Only if' / 'requires' / 'must have' → Necessary condition.",
      "'Is enough' / 'is sufficient' / 'guarantees' → Sufficient condition.",
      "'Unless' / 'except if' → Exception.",
      "'Otherwise' / 'if not' / 'failing that' → Alternative outcome.",
      "'Before' / 'must first' → Prerequisite.",
      "'Depends on' / 'subject to' / 'conditional upon' → Dependency.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 4 — Section 6: Quantifiers
     Mechanic: dragToBin
     ────────────────────────────────────────────── */
  {
    id: 4,
    title: "Quantifier Quest",
    section: "Section 6 — Quantifiers & Quantity Expressions",
    description: "Sort each statement into the correct quantifier category.",
    instruction: "Read the sentence carefully and drag it to the matching quantifier type.",
    mechanic: "dragToBin",
    conceptsLearned: ["Universal (All)", "Existential (Some)", "No-existence (None)", "Minimum (At least)", "Maximum (At most)", "Exact"],
    bins: ["Universal", "Existential", "No-existence", "Minimum", "Maximum", "Exact"],
    binCols: 3,
    items: [
      { text: "All applicants must provide valid identification.", answer: "Universal" },
      { text: "Some applicants have incomplete documents.", answer: "Existential" },
      { text: "None of the applicants has completed verification yet.", answer: "No-existence" },
      { text: "Applicants must submit at least two supporting documents.", answer: "Minimum" },
      { text: "An applicant may select at most two preferred programs.", answer: "Maximum" },
      { text: "An applicant must select exactly one admission category.", answer: "Exact" },
      { text: "Every applicant must provide valid identification.", answer: "Universal" },
      { text: "At least one applicant has incomplete documents.", answer: "Existential" },
      { text: "Not any submitted application is verified.", answer: "No-existence" },
      { text: "Applicants must submit no fewer than two documents.", answer: "Minimum" },
      { text: "Applicants may choose no more than two programs.", answer: "Maximum" },
      { text: "The applicant must upload precisely three forms.", answer: "Exact" },
    ],
    hints: [
      "'All' / 'every' / 'each' → Universal.",
      "'Some' / 'at least one' / 'there is' → Existential.",
      "'None' / 'no applicant' / 'not any' → No-existence.",
      "'At least' / 'no fewer than' → Minimum quantity.",
      "'At most' / 'no more than' → Maximum quantity.",
      "'Exactly' / 'precisely' → Exact quantity.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 5 — Section 7: Comparisons & Rankings
     Mechanic: matchPairs
     ────────────────────────────────────────────── */
  {
    id: 5,
    title: "Comparison Arena",
    section: "Section 7 — Comparison, Ranking & Preference",
    description: "Match each statement to the comparison type it expresses.",
    instruction: "Click a statement on the left, then click the matching comparison type on the right.",
    mechanic: "matchPairs",
    conceptsLearned: ["Greater Value", "Lower Value", "Equality", "Inequality", "Ranking", "Preference", "Order"],
    pairs: [
      { left: "Ali's test score is higher than Ahmed's.", right: "Greater Value" },
      { left: "Ahmed's score is below the required threshold.", right: "Lower Value" },
      { left: "The recorded score matches the verified result.", right: "Equality" },
      { left: "The certificate name does not match the record.", right: "Inequality" },
      { left: "Ali has the highest score among the applicants.", right: "Ranking" },
      { left: "Ali prefers BS CS rather than BS AI.", right: "Preference" },
      { left: "Verification occurs after application submission.", right: "Order" },
    ],
    hints: [
      "'Higher than' / 'exceeds' / 'greater than' → Greater Value.",
      "'Below' / 'less than' / 'lower than' → Lower Value.",
      "'Matches' / 'equal to' / 'the same as' → Equality.",
      "'Does not match' / 'different from' → Inequality.",
      "'Highest' / 'first' / 'top-ranked' → Ranking.",
      "'Prefers' / 'rather than' / 'instead of' → Preference.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 6 — Section 8: Temporal & Sequence
     Mechanic: orderSequence
     ────────────────────────────────────────────── */
  {
    id: 6,
    title: "Timeline Architect",
    section: "Section 8 — Temporal & Sequence Expressions",
    description: "Arrange these admission process events in the correct chronological order.",
    instruction: "Drag the items up or down to reorder them, then click 'Check Order'.",
    mechanic: "orderSequence",
    conceptsLearned: ["Time Point", "Before / After", "Sequence", "Duration", "Start / End", "Until", "Deadline", "Immediate Sequence", "Change of State"],
    items: [
      "Application period begins on 1 October. [Start]",
      "Ali submits the application on 10 October. [Time Point]",
      "Fee must be paid before the deadline. [Before / Deadline]",
      "Once payment is confirmed, receipt is issued. [Immediate Sequence]",
      "Document verification occurs after submission. [After]",
      "Application remains pending until verification is completed. [Until]",
      "Merit list is published after evaluation. [Sequence]",
      "Offer expires on 15 November. [End / Deadline]",
    ],
    hints: [
      "The process starts with the application period opening.",
      "Submission happens before fee payment.",
      "A receipt is generated immediately after payment.",
      "Verification comes after submission; it resolves the 'pending' state.",
      "The merit list is published later; the offer expires last.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 7 — Section 9: Causal & Evidential
     Mechanic: matchPairs
     ────────────────────────────────────────────── */
  {
    id: 7,
    title: "Cause & Effect Web",
    section: "Section 9 — Causal, Explanatory & Evidential Expressions",
    description: "Link each cause or reason to the effect or conclusion it produces.",
    instruction: "Click a cause/reason on the left, then click the matching effect on the right.",
    mechanic: "matchPairs",
    conceptsLearned: ["Cause", "Reason / Explanation", "Evidence", "Tentative Inference", "Prediction", "Conclusion", "Contrast"],
    pairs: [
      { left: "A required document is missing.", right: "Application is delayed. (Cause → Effect)" },
      { left: "The fee is unpaid.", right: "Registration is incomplete. (Reason)" },
      { left: "The official receipt confirms payment.", right: "Payment is verified. (Evidence)" },
      { left: "The scan points to an authenticity issue.", right: "Certificate flagged for review. (Tentative Inference)" },
      { left: "Complete documents submitted.", right: "Verification likely finishes sooner. (Prediction)" },
      { left: "All criteria are met.", right: "Application passes the check. (Conclusion)" },
    ],
    hints: [
      "'Causes' / 'leads to' / 'results in' → Cause to Effect.",
      "'Because' / 'since' / 'due to' → Reason / Explanation.",
      "'Evidence shows' / 'record indicates' → Evidence.",
      "'Suggests' / 'indicates' / 'points to' → Tentative Inference.",
      "'Likely' / 'probably' / 'expected to' → Prediction.",
      "'Therefore' / 'hence' / 'thus' → Conclusion.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 8 — Section 10: Uncertainty Spectrum
     Mechanic: dragToBin (spectrum variant)
     ────────────────────────────────────────────── */
  {
    id: 8,
    title: "Certainty Spectrum",
    section: "Section 10 — Uncertainty, Probability & Assumptions",
    description: "Place each statement on the certainty spectrum — from Confirmed to Unknown.",
    instruction: "Drag each statement to the correct zone on the spectrum.",
    mechanic: "spectrum",
    conceptsLearned: ["Certainty / Confirmed", "Probability / Likely", "Possibility / May", "Uncertainty / Unclear", "Unknown / Missing Information", "Assumption"],
    zones: [
      { name: "Confirmed", cssClass: "zone-confirmed" },
      { name: "Probable", cssClass: "zone-probable" },
      { name: "Possible", cssClass: "zone-possible" },
      { name: "Uncertain", cssClass: "zone-uncertain" },
      { name: "Unknown", cssClass: "zone-unknown" },
    ],
    items: [
      { text: "The official record confirms the fee was received.", answer: "Confirmed" },
      { text: "The certificate is certainly valid.", answer: "Confirmed" },
      { text: "The applicant will probably complete verification tomorrow.", answer: "Probable" },
      { text: "The application is likely to pass the initial check.", answer: "Probable" },
      { text: "The application may be delayed because of a server issue.", answer: "Possible" },
      { text: "The system could be unavailable.", answer: "Possible" },
      { text: "The certificate's authenticity is uncertain.", answer: "Uncertain" },
      { text: "The reason for the delay is unclear.", answer: "Uncertain" },
      { text: "The applicant's payment status is unknown.", answer: "Unknown" },
      { text: "The payment status is not recorded in the system.", answer: "Unknown" },
    ],
    hints: [
      "'Certainly' / 'definitely' / 'confirmed' → Confirmed.",
      "'Probably' / 'likely' → Probable.",
      "'May' / 'might' / 'could' / 'possibly' → Possible.",
      "'Uncertain' / 'unclear' → Uncertain.",
      "'Unknown' / 'unavailable' / 'not recorded' → Unknown.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 9 — Section 11: Rules & Obligations
     Mechanic: dragToBin
     ────────────────────────────────────────────── */
  {
    id: 9,
    title: "Rule Engine",
    section: "Section 11 — Rules, Obligations, Permissions & Prohibitions",
    description: "Classify each rule or policy statement into its deontic category.",
    instruction: "Drag each rule to the matching category: Obligation, Permission, Prohibition, Recommendation, or Requirement.",
    mechanic: "dragToBin",
    conceptsLearned: ["Obligation (must)", "Permission (may)", "Prohibition (must not)", "Recommendation (should)", "Requirement (requires)"],
    bins: ["Obligation", "Permission", "Prohibition", "Recommendation", "Requirement"],
    binCols: 5,
    items: [
      { text: "Applicants must submit required documents.", answer: "Obligation" },
      { text: "An eligible applicant may apply for a program.", answer: "Permission" },
      { text: "Applicants must not submit false information.", answer: "Prohibition" },
      { text: "Applicants should check status regularly.", answer: "Recommendation" },
      { text: "The application requires a valid contact number.", answer: "Requirement" },
      { text: "The officer is required to verify the record.", answer: "Obligation" },
      { text: "The applicant is allowed to update contact details.", answer: "Permission" },
      { text: "An officer is prohibited from changing a verified score.", answer: "Prohibition" },
      { text: "It is advisable to review entries before submission.", answer: "Recommendation" },
      { text: "A signed declaration is mandatory.", answer: "Requirement" },
    ],
    hints: [
      "'Must' / 'has to' / 'is required to' → Obligation.",
      "'May' / 'is allowed to' / 'can' → Permission.",
      "'Must not' / 'is prohibited' / 'cannot' → Prohibition.",
      "'Should' / 'ought to' / 'is advisable' → Recommendation.",
      "'Requires' / 'needs' / 'is mandatory' → Requirement.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 10 — Section 12: Knowledge & Verification
     Mechanic: dragToBin
     ────────────────────────────────────────────── */
  {
    id: 10,
    title: "Trust Verifier",
    section: "Section 12 — Knowledge, Belief, Reports & Verification",
    description: "Sort each claim by its epistemic status: is it verified, believed, reported, or conflicting?",
    instruction: "Drag each claim to the correct epistemic category.",
    mechanic: "dragToBin",
    conceptsLearned: ["Known / Verified", "Belief", "Reported Claim", "Conflicting Information", "Derived Knowledge"],
    bins: ["Verified", "Belief", "Reported", "Conflicting"],
    binCols: 4,
    items: [
      { text: "The officer has verified that the certificate was received.", answer: "Verified" },
      { text: "The payment is confirmed through the official record.", answer: "Verified" },
      { text: "The officer believes the certificate may be authentic.", answer: "Belief" },
      { text: "The reviewer thinks that the scan is readable.", answer: "Belief" },
      { text: "The applicant reports that the fee was paid yesterday.", answer: "Reported" },
      { text: "According to the applicant, the certificate was issued last year.", answer: "Reported" },
      { text: "The date on the certificate contradicts the application date.", answer: "Conflicting" },
      { text: "The reported amount differs from the receipt.", answer: "Conflicting" },
    ],
    hints: [
      "'Verified by' / 'confirmed through' → Verified fact.",
      "'Believes that' / 'thinks that' → Belief (not verified).",
      "'Reports that' / 'states that' / 'according to' → Reported claim.",
      "'Contradicts' / 'conflicts with' / 'differs from' → Conflicting info.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 11 — Section 13: Hypothetical & Counterfactual
     Mechanic: dragToBin
     ────────────────────────────────────────────── */
  {
    id: 11,
    title: "What-If Simulator",
    section: "Section 13 — Hypothetical & Counterfactual Expressions",
    description: "Distinguish between hypothetical scenarios, counterfactual statements, and goal/purpose expressions.",
    instruction: "Drag each statement to the correct category.",
    mechanic: "dragToBin",
    conceptsLearned: ["Hypothetical Situation", "Counterfactual Situation", "Goal / Purpose", "Alternative Scenario", "Failure to Meet Requirement"],
    bins: ["Hypothetical", "Counterfactual", "Goal / Purpose"],
    binCols: 3,
    items: [
      { text: "Suppose the applicant submits the missing certificate tomorrow.", answer: "Hypothetical" },
      { text: "What if the applicant changes the selected program?", answer: "Hypothetical" },
      { text: "Imagine the portal is unavailable at the deadline.", answer: "Hypothetical" },
      { text: "If the applicant had submitted earlier, verification might have finished sooner.", answer: "Counterfactual" },
      { text: "If the fee had been paid, registration would have proceeded.", answer: "Counterfactual" },
      { text: "The officer could have approved the file if all documents had been present.", answer: "Counterfactual" },
      { text: "The applicant uploads the certificate so that the office can verify it.", answer: "Goal / Purpose" },
      { text: "The officer checks the score in order to confirm eligibility.", answer: "Goal / Purpose" },
      { text: "The system sends a reminder with the aim of reducing late submissions.", answer: "Goal / Purpose" },
    ],
    hints: [
      "'Suppose' / 'imagine' / 'what if' → Hypothetical (imagined future).",
      "'If…had' / 'would have' / 'could have' → Counterfactual (unrealized past).",
      "'So that' / 'in order to' / 'with the aim of' → Goal / Purpose.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 12 — Section 14: Questions, Commands & Instructions
     Mechanic: dragToBin
     ────────────────────────────────────────────── */
  {
    id: 12,
    title: "Command Center",
    section: "Section 14 — Questions, Commands, Requests & Instructions",
    description: "Route each incoming sentence to its correct communication type.",
    instruction: "Drag each sentence to the correct category.",
    mechanic: "dragToBin",
    conceptsLearned: ["Information Question", "Yes/No Question", "Command", "Polite Request", "Instruction", "Warning"],
    bins: ["Info Question", "Command", "Request", "Warning"],
    binCols: 4,
    items: [
      { text: "Who submitted the application?", answer: "Info Question" },
      { text: "What documents are missing?", answer: "Info Question" },
      { text: "Verify the submitted certificate.", answer: "Command" },
      { text: "Approve the application.", answer: "Command" },
      { text: "Please show the application's current status.", answer: "Request" },
      { text: "Could you check the application record?", answer: "Request" },
      { text: "Do not mark the fee as paid without confirmation.", answer: "Warning" },
      { text: "Ensure that payment is confirmed before marking fee as paid.", answer: "Warning" },
      { text: "When was Ali's application submitted?", answer: "Info Question" },
      { text: "Reject the application.", answer: "Command" },
      { text: "Kindly provide the payment receipt.", answer: "Request" },
      { text: "Be careful when entering the application number.", answer: "Warning" },
    ],
    hints: [
      "'Who' / 'what' / 'when' / 'where' / 'why' / 'how' → Information Question.",
      "'Check' / 'verify' / 'approve' / 'reject' → Command.",
      "'Please' / 'kindly' / 'could you' → Polite Request.",
      "'Do not' / 'ensure that' / 'be careful' → Warning.",
    ]
  },

  /* ──────────────────────────────────────────────
     LEVEL 13 — Sections 15-18: Final Challenge
     Mechanic: matchPairs (mixed concepts from all sections)
     ────────────────────────────────────────────── */
  {
    id: 13,
    title: "Final Challenge — Master Classifier",
    section: "Sections 15–18 — Comprehensive Concept Mastery",
    description: "This is the ultimate challenge! Identify the primary KRR concept family for each practical case from the PDF.",
    instruction: "Click a sentence on the left, then click the concept family it primarily belongs to on the right.",
    mechanic: "matchPairs",
    conceptsLearned: ["All concept families from the entire PDF", "5-Step Analysis Method", "Concept Family Classification", "Ambiguity Recognition"],
    pairs: [
      { left: "Ali submitted the application and paid the fee.", right: "Conjunction (Logic)" },
      { left: "The applicant has not submitted the certificate.", right: "Negation (Logic)" },
      { left: "Every applicant must provide valid identification.", right: "Universal Quantifier + Obligation" },
      { left: "Unless the fee is paid, the application may be cancelled.", right: "Exception (Conditional)" },
      { left: "The application was delayed because a document was missing.", right: "Causal Explanation" },
      { left: "Ahmed's score is below the required threshold.", right: "Comparison (Lower Value)" },
      { left: "The documents must be verified before the merit list is published.", right: "Temporal Order + Obligation" },
      { left: "The applicant will probably complete verification tomorrow.", right: "Prediction (Uncertainty)" },
      { left: "Neither the certificate nor an alternative was submitted.", right: "Joint Negation (NOR)" },
      { left: "If the applicant had submitted earlier, verification might have finished sooner.", right: "Counterfactual" },
    ],
    hints: [
      "Look for the primary keyword: 'and', 'not', 'every', 'unless', 'because', 'below', 'before', 'probably', 'neither…nor', 'if…had'.",
      "Use the 5-step method: Purpose → Keywords → Classify → Interpret → Assess.",
      "A single sentence can belong to multiple families. Pick the PRIMARY one.",
    ]
  },
];

/* ====================================================
   Concept Map for Final Summary (Section 18)
   ==================================================== */
const CONCEPT_FAMILIES = [
  {
    family: "Representations of Knowledge",
    question: "What does the system know or describe?",
    tags: ["Fact", "Statement", "Entity", "Property", "Relationship", "Classification", "Existence", "Identity", "Quantity", "State / Status", "Action", "Event"],
  },
  {
    family: "Logical & Structural Expressions",
    question: "How are statements or conditions related?",
    tags: ["Conjunction", "Disjunction", "Negation", "Conditional", "Biconditional", "Exclusive Alternative", "Joint Negation", "Exclusion", "Quantifiers", "Comparisons"],
  },
  {
    family: "Reasoning & Evidence Expressions",
    question: "Why might something be true, and how well is it supported?",
    tags: ["Cause", "Reason", "Evidence", "Inference", "Prediction", "Generalization", "Conclusion", "Premise", "Contrast", "Uncertainty", "Assumption"],
  },
  {
    family: "Operational & Contextual Expressions",
    question: "When does something apply, and what should an agent do?",
    tags: ["Obligation", "Permission", "Prohibition", "Recommendation", "Requirement", "Eligibility", "Exception", "Priority", "Restriction", "Temporal", "Sequence", "Question", "Command"],
  },
];

