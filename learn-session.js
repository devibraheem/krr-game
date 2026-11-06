/* ====================================================
   learn-session.js — Interactive Learning Session
   Animated concept cards, keyword highlighting,
   interactive examples — covers ALL PDF sections
   ==================================================== */

/* ---------- SECTION DATA ---------- */
const LEARN_SECTIONS = [

  // ── Section 0: Welcome ──
  {
    title: "Welcome to KRR",
    subtitle: "Understanding Natural Language in Knowledge Representation & Reasoning",
    icon: "🧠",
    intro: "In KRR, we don't just read sentences — we identify their meaning, extract information, understand how parts relate, and determine what conclusions follow. Every sentence can express facts, properties, relationships, conditions, explanations, or conclusions.",
    concepts: [
      { type: "Fact", kw: "is, has, submitted, paid", def: "Information accepted as true in the knowledge base.", ex: "Ali «submitted» his application." },
      { type: "Property", kw: "is, has, possesses", def: "A characteristic or attribute of an entity.", ex: "Ali's application is «incomplete»." },
      { type: "Relationship", kw: "applied to, belongs to", def: "A connection between two or more entities.", ex: "Ali «applied to» the BS Computer Science program." },
      { type: "Condition", kw: "if, when, unless", def: "A requirement that must hold for an outcome.", ex: "An application can proceed «when» the documents are complete." },
      { type: "Explanation", kw: "because, since, due to", def: "A reason or cause given for something.", ex: "The application was delayed «because» a document was missing." },
      { type: "Conclusion", kw: "therefore, hence, thus", def: "A result drawn from preceding information.", ex: "«Therefore», the application does not meet the requirement." },
    ],
    insight: "A single sentence may express multiple categories at once. Always analyze the full meaning before classifying."
  },

  // ── Section 1: Knowledge Representations ──
  {
    title: "Knowledge Representations",
    subtitle: "Section 3 — Facts, Entities, Properties, Relationships, Actions & Events",
    icon: "📚",
    intro: "This is the foundation of KRR. Everything the system knows is represented as one of these types. Understanding the difference between a fact, entity, property, relationship, state, action, and event is the first step.",
    concepts: [
      { type: "Fact", kw: "is, has, submitted, paid", def: "Information accepted as true in the knowledge base.", ex: "Ali «submitted» his application." },
      { type: "Statement / Proposition", kw: "a complete factual statement", def: "A sentence whose truth can be assessed as true or false.", ex: "Ali scored «78 marks» in the admission test." },
      { type: "Entity", kw: "applicant, application, program", def: "A person, object, organization, or identifiable item.", ex: "«Ali» is an applicant." },
      { type: "Property / Attribute", kw: "is, has, possesses, contains", def: "A characteristic of an entity.", ex: "Ali's application «is complete»." },
      { type: "Relationship", kw: "applied to, belongs to, submitted by", def: "A connection between two or more entities.", ex: "Ali «applied to» the BS Computer Science program." },
      { type: "Classification", kw: "is a, belongs to, classified as", def: "Assignment of an entity to a category.", ex: "Ali «is» an undergraduate applicant." },
      { type: "Existence", kw: "exists, there is, is available", def: "Whether something exists or is available.", ex: "An application record «exists» for Ali." },
      { type: "Identity", kw: "is the same as, refers to", def: "Whether two references identify the same entity.", ex: "The reference number «refers to» the same application." },
      { type: "Quantity", kw: "has, contains, totals, costs", def: "A count or measurable amount.", ex: "Ali «has» two supporting documents." },
      { type: "State / Status", kw: "pending, approved, rejected, verified", def: "The current condition of an entity.", ex: "Ali's application is «pending»." },
      { type: "Action", kw: "submits, reviews, approves, verifies", def: "Something an agent performs.", ex: "The officer «reviews» the application." },
      { type: "Event", kw: "occurred, happened, was submitted", def: "Something that happens, often at a particular time.", ex: "The application was submitted on «10 October»." },
    ],
    insight: "A Fact records what IS true. A Statement is something whose truth CAN be assessed. An Entity is a thing; a Property describes it; a Relationship connects entities."
  },

  // ── Section 2: Logical Connectives ──
  {
    title: "Logical Connectives",
    subtitle: "Section 4 — AND, OR, NOT, IF, IFF & Their Variations",
    icon: "🔗",
    intro: "Logical connectives join or modify statements. They determine how conditions combine. Misunderstanding 'and' vs 'or' or 'neither…nor' vs 'not both' can completely change the meaning.",
    concepts: [
      { type: "Conjunction (AND)", kw: "and, both…and, as well as", def: "Two or more requirements apply together.", ex: "The applicant must meet the academic requirement «and» submit documents." },
      { type: "Disjunction (OR)", kw: "or, either…or, alternatively", def: "Presents alternatives; one or both may be permitted.", ex: "Submit a national ID «or» another approved document." },
      { type: "Negation (NOT)", kw: "not, no, never, cannot", def: "Denies a statement or condition.", ex: "Ali has «not» submitted the required certificate." },
      { type: "Conditional (IF)", kw: "if, whenever, in the event that", def: "A relationship between a condition and an outcome.", ex: "«If» the documents are complete, the application can proceed." },
      { type: "Biconditional (IFF)", kw: "if and only if, exactly when", def: "Each condition holds precisely when the other does — both directions apply.", ex: "An application is complete «if and only if» all requirements are satisfied." },
      { type: "Exclusive Alternative", kw: "either…or but not both", def: "Exactly one alternative is allowed.", ex: "Choose morning «or» evening assessment, «but not both»." },
      { type: "Joint Negation (NOR)", kw: "neither…nor", def: "Denies BOTH statements.", ex: "The applicant submitted «neither» the certificate «nor» an alternative." },
      { type: "Exclusion (NAND)", kw: "not both, cannot have both", def: "Two conditions cannot hold together; at least one must not hold.", ex: "The applicant «cannot» accept «both» offers simultaneously." },
    ],
    insight: "OR may allow both alternatives (inclusive) or only one (exclusive) — context decides. 'Neither…nor' denies both; 'not both' means at least one is false. 'If and only if' goes both ways — don't use it for one-way implications!"
  },

  // ── Section 3: Conditional Expressions ──
  {
    title: "Conditions & Requirements",
    subtitle: "Section 5 — Necessary, Sufficient, Exceptions, Prerequisites & Dependencies",
    icon: "⚙️",
    intro: "Conditions define when something can happen. A necessary condition MUST hold but might not be enough. A sufficient condition IS enough. Prerequisites enforce order. Dependencies link outcomes to decisions.",
    concepts: [
      { type: "Necessary Condition", kw: "only if, requires, must have", def: "Must hold for the outcome to be possible, but may not be enough by itself.", ex: "Registration proceeds «only if» the fee is paid." },
      { type: "Sufficient Condition", kw: "is enough to, is sufficient for", def: "If met, the outcome is guaranteed.", ex: "Meeting all eligibility criteria «is sufficient» to pass the check." },
      { type: "Exception", kw: "unless, except if, except when", def: "A case where the general rule may not apply.", ex: "«Unless» the fee is paid by the deadline, the application may be cancelled." },
      { type: "Alternative Outcome", kw: "otherwise, if not, failing that", def: "What happens when a condition is NOT met.", ex: "Submit the document by the deadline; «otherwise», the application may be cancelled." },
      { type: "Prerequisite", kw: "before, must first, requires prior", def: "A step that must be completed before another step.", ex: "The fee must first be paid «before» registration is finalized." },
      { type: "Dependency", kw: "depends on, subject to, conditional upon", def: "An outcome depends on another condition or decision.", ex: "Final admission «depends on» meeting all eligibility requirements." },
    ],
    insight: "A necessary condition is NOT automatically sufficient! Paying the admission fee may be necessary for registration, but payment alone does not establish eligibility. Always check both."
  },

  // ── Section 4: Quantifiers ──
  {
    title: "Quantifiers & Quantities",
    subtitle: "Section 6 — All, Some, None, At Least, At Most, Exactly",
    icon: "🔢",
    intro: "Quantifiers specify HOW MANY entities a statement applies to. 'All' means every single one. 'Some' means at least one. 'None' means zero. Getting these wrong changes the entire meaning of a rule.",
    concepts: [
      { type: "Universal (All)", kw: "all, every, each", def: "Applies to EVERY individual in the group.", ex: "«All» applicants must provide valid identification." },
      { type: "Existential (Some)", kw: "some, at least one, there is", def: "At least one individual has the stated property.", ex: "«Some» applicants have incomplete documents." },
      { type: "No-existence (None)", kw: "none, no, not any", def: "No member of the group has the property.", ex: "«None» of the applicants has completed verification." },
      { type: "Minimum Quantity", kw: "at least, no fewer than", def: "The quantity cannot be below this minimum.", ex: "Submit «at least» two supporting documents." },
      { type: "Maximum Quantity", kw: "at most, no more than", def: "The quantity cannot exceed this maximum.", ex: "Select «at most» two preferred programs." },
      { type: "Exact Quantity", kw: "exactly, precisely", def: "The quantity must match this exact number.", ex: "Select «exactly» one admission category." },
      { type: "Majority", kw: "most, the majority", def: "More than half (strict numerical sense).", ex: "«Most» applicants completed verification on time." },
      { type: "Proportion", kw: "half, 80 percent, one in five", def: "A fraction or percentage of the group.", ex: "«Eighty percent» of applications have been verified." },
    ],
    insight: "Words like 'few', 'many', and 'most' can be vague. A system may need explicit numerical thresholds to interpret them consistently. 'At least' sets a floor; 'at most' sets a ceiling; 'exactly' demands precision."
  },

  // ── Section 5: Comparisons ──
  {
    title: "Comparisons & Rankings",
    subtitle: "Section 7 — Greater, Lower, Equal, Ranking, Preference & Order",
    icon: "⚖️",
    intro: "Comparison expressions let us evaluate values against each other or against thresholds. They are crucial for eligibility checks, rankings, and preference recording.",
    concepts: [
      { type: "Greater Value", kw: "greater than, exceeds, higher than", def: "One value is larger than another.", ex: "Ali's score is «higher than» Ahmed's." },
      { type: "Lower Value", kw: "less than, below, lower than", def: "One value is smaller than another.", ex: "Ahmed's score is «below» the required threshold." },
      { type: "Equality", kw: "equal to, matches, the same as", def: "Two values are equal or correspond.", ex: "The recorded score «matches» the verified result." },
      { type: "Inequality", kw: "different from, does not match", def: "Two values are NOT equal.", ex: "The certificate name «does not match» the application record." },
      { type: "Ranking", kw: "highest, lowest, first, top-ranked", def: "Places an item in an ordered position.", ex: "Ali has the «highest» score among applicants." },
      { type: "Preference", kw: "prefer, rather than, instead of", def: "Expresses a choice or favored alternative.", ex: "Ali «prefers» BS CS «rather than» BS AI." },
      { type: "Order", kw: "before, after, earlier, later", def: "Indicates relative order, often in time.", ex: "Verification occurs «after» application submission." },
    ],
    insight: "Order alone does not prove causation. Just because event A happened before event B does not mean A caused B. Similarly, preference is NOT the same as eligibility or guaranteed allocation."
  },

  // ── Section 6: Temporal Expressions ──
  {
    title: "Time & Sequence",
    subtitle: "Section 8 — When, Before, After, Until, Duration & Deadlines",
    icon: "⏰",
    intro: "Temporal expressions locate events in time, establish order, specify durations, and set deadlines. They are essential for workflow management, audit trails, and process enforcement.",
    concepts: [
      { type: "Time Point", kw: "on, at, during", def: "Locates an event at a specific date, time, or period.", ex: "Ali submitted the application «on» 10 October." },
      { type: "Before", kw: "before, earlier than, prior to", def: "Places an event earlier than a reference point.", ex: "The fee must be paid «before» the deadline." },
      { type: "After", kw: "after, following, subsequently", def: "Places an event later than another.", ex: "The merit list is published «after» evaluation." },
      { type: "Sequence", kw: "first, then, next, finally", def: "Specifies ordered procedural steps.", ex: "«First», submit the application; «then», verify the documents." },
      { type: "Duration", kw: "for, throughout, lasting", def: "States how long a condition continues.", ex: "The application remained pending «for» five days." },
      { type: "Until", kw: "until, up to the time when", def: "A condition continues up to a specified event.", ex: "The application remains pending «until» verification is completed." },
      { type: "Deadline", kw: "by, no later than", def: "Sets the latest permitted time for an action.", ex: "Submit the document «by» 30 October." },
      { type: "Immediate Sequence", kw: "as soon as, once", def: "An action follows immediately upon completion of a condition.", ex: "«Once» verification is completed, the system updates the status." },
      { type: "Change of State", kw: "becomes, changes from…to, remains", def: "Describes a transition or persistence of state.", ex: "The status «changes from» pending «to» approved." },
    ],
    insight: "'After' describes temporal order — it does NOT necessarily mean one event caused another. 'By' means 'no later than' (on or before), not 'before'. Always distinguish sequence from causation."
  },

  // ── Section 7: Causal & Evidence ──
  {
    title: "Cause, Evidence & Reasoning",
    subtitle: "Section 9 — Causes, Reasons, Evidence, Inferences, Predictions & Conclusions",
    icon: "🔍",
    intro: "These expressions explain WHY something is true and HOW WELL it's supported. The difference between a cause, a reason, evidence, a prediction, and a conclusion is critical for valid reasoning.",
    concepts: [
      { type: "Cause", kw: "causes, leads to, results in", def: "A direct causal relationship.", ex: "A server outage «causes» a delay in submission." },
      { type: "Reason", kw: "because, since, due to", def: "Gives an explanation for something.", ex: "The application is delayed «because» a document is missing." },
      { type: "Evidence", kw: "evidence shows, record indicates, according to", def: "Supports a claim with data or records.", ex: "«Evidence shows» that the certificate was received." },
      { type: "Tentative Inference", kw: "suggests, indicates, points to", def: "A provisional conclusion from observations.", ex: "The mismatch «indicates» a possible data-entry error." },
      { type: "Prediction", kw: "likely, probably, expected to", def: "Estimates a possible future outcome.", ex: "The report is «expected to» be ready by Friday." },
      { type: "Conclusion", kw: "therefore, hence, consequently, thus", def: "A conclusion drawn from preceding information.", ex: "The fee is unpaid; «hence», registration is incomplete." },
      { type: "Supporting Premise", kw: "given that, considering that, based on", def: "Information offered in support of a conclusion.", ex: "«Given that» Ali meets the threshold, he satisfies the requirement." },
      { type: "Contrast", kw: "however, although, even though, nevertheless", def: "Highlights a contrast or qualification between claims.", ex: "«Although» Ali meets the score threshold, his documents are incomplete." },
    ],
    insight: "'Because' does not PROVE that the stated cause is correct. 'Therefore' does not GUARANTEE the conclusion follows logically. Evidence, causal claims, and conclusions must each be evaluated separately."
  },

  // ── Section 8: Uncertainty ──
  {
    title: "Uncertainty & Assumptions",
    subtitle: "Section 10 — Certainty, Possibility, Probability, Assumptions & Missing Info",
    icon: "❓",
    intro: "Not everything in a knowledge base is certain. Some information is confirmed, some is probable, some is merely possible, and some is completely unknown. Knowing the difference prevents false conclusions.",
    concepts: [
      { type: "Certainty", kw: "certainly, definitely, confirmed", def: "A claim presented as certain or confirmed.", ex: "The official record «confirms» that the fee was received." },
      { type: "Possibility", kw: "may, might, could, possibly", def: "Something is possible but not established.", ex: "The application «may» be delayed due to a server issue." },
      { type: "Probability", kw: "probably, likely, unlikely", def: "An estimated likelihood.", ex: "The applicant will «probably» complete verification tomorrow." },
      { type: "Uncertainty", kw: "uncertain, unclear, not yet known", def: "The truth or status has not been established.", ex: "The certificate's authenticity is «uncertain»." },
      { type: "Assumption", kw: "assume, suppose, presuming", def: "A temporary premise for reasoning — NOT a verified fact.", ex: "«Assuming» the test score is correct, the applicant meets the threshold." },
      { type: "Appearance", kw: "appears to, seems to, apparently", def: "How something looks based on observations.", ex: "The application «appears» incomplete because a document is missing." },
      { type: "Missing Information", kw: "unknown, unavailable, not recorded", def: "Information is absent from available records.", ex: "The applicant's payment status is «unknown»." },
    ],
    insight: "'Not recorded' does NOT mean 'not paid'. 'Probably eligible' does NOT mean 'confirmed eligible'. Absence of a record does not establish the negative claim. Always distinguish what you KNOW from what you ASSUME."
  },

  // ── Section 9: Rules & Obligations ──
  {
    title: "Rules, Obligations & Permissions",
    subtitle: "Section 11 — Must, May, Must Not, Should, Requires & Eligibility",
    icon: "📋",
    intro: "Deontic expressions define what agents MUST do (obligation), what they MAY do (permission), what they MUST NOT do (prohibition), and what they SHOULD do (recommendation). Confusing these changes everything.",
    concepts: [
      { type: "Obligation", kw: "must, has to, is required to", def: "A duty or mandatory action.", ex: "Applicants «must» submit the required documents." },
      { type: "Permission", kw: "may, is allowed to, can", def: "An allowed action (not mandatory).", ex: "An eligible applicant «may» apply for a program." },
      { type: "Prohibition", kw: "must not, is prohibited from, cannot", def: "An action that is forbidden.", ex: "Applicants «must not» submit false information." },
      { type: "Recommendation", kw: "should, ought to, is advisable", def: "Advice, not an absolute requirement.", ex: "Applicants «should» check status regularly." },
      { type: "Requirement", kw: "requires, needs, is mandatory", def: "Something needed for a process or outcome.", ex: "The application «requires» a valid contact number." },
      { type: "Eligibility", kw: "qualifies when, eligible if, meets criteria", def: "Conditions under which a person qualifies.", ex: "An applicant is «eligible if» the score meets the threshold." },
      { type: "Restriction", kw: "only, limited to, restricted to", def: "Limits availability, scope, or participants.", ex: "The service is available «only» to registered applicants." },
      { type: "Priority", kw: "priority is given to, takes precedence", def: "One case is handled before another.", ex: "«Priority is given to» applicants in a designated category." },
    ],
    insight: "'Must' = obligation. 'May' = permission OR possibility (context decides). 'Should' = advice (not mandatory). Don't misclassify a recommendation as a rule, or a permission as an obligation!"
  },

  // ── Section 10: Knowledge & Verification ──
  {
    title: "Knowledge, Belief & Verification",
    subtitle: "Section 12 — Known, Believed, Reported, Verified, Conflicting & Derived",
    icon: "🔐",
    intro: "A key KRR principle: a reported claim is NOT automatically a verified fact. We must track WHO knows or believes something, HOW it was verified, and WHETHER sources conflict.",
    concepts: [
      { type: "Known / Verified", kw: "knows that, has verified, confirmed through", def: "Information known or verified by an identified agent.", ex: "The officer «has verified» that the certificate was received." },
      { type: "Belief", kw: "believes that, thinks that, considers", def: "An agent's judgment — may not be verified.", ex: "The officer «believes» the certificate may be authentic." },
      { type: "Suspicion", kw: "suspects that, has reason to suspect", def: "A reasoned concern that something may be the case.", ex: "The system «suspects» that a certificate is altered." },
      { type: "Reported Information", kw: "reports that, states that, according to", def: "A claim attributed to a source.", ex: "The applicant «reports that» the fee was paid yesterday." },
      { type: "Verified Information", kw: "verified by, confirmed through, authenticated by", def: "A claim confirmed through a verification process.", ex: "The payment is «verified by» the finance officer." },
      { type: "Conflicting Information", kw: "contradicts, conflicts with, differs from", def: "Incompatible or inconsistent information.", ex: "The date on the certificate «contradicts» the application date." },
      { type: "Derived Knowledge", kw: "implies, follows from, can be inferred", def: "Information concluded from other known information.", ex: "Eligibility can be «inferred from» the approved criteria." },
    ],
    insight: "Always preserve WHAT is reported, WHAT is verified, WHAT is inferred, and WHAT is unknown. Never promote a belief to a verified fact. When sources conflict, flag for reconciliation."
  },

  // ── Section 11: Hypothetical & Counterfactual ──
  {
    title: "Hypothetical & Counterfactual",
    subtitle: "Section 13 — Suppose, What If, If…Had, Would Have, So That",
    icon: "💭",
    intro: "Hypothetical statements describe imagined situations. Counterfactuals describe alternatives to what actually happened. Neither establishes that an event occurred. Purpose statements explain WHY an action is taken.",
    concepts: [
      { type: "Hypothetical", kw: "suppose, imagine, what if", def: "An imagined situation — not asserting it occurred.", ex: "«Suppose» the applicant submits the missing certificate tomorrow." },
      { type: "Counterfactual", kw: "if…had, would have, could have", def: "An alternative to an actual past situation.", ex: "«If» the applicant «had» submitted earlier, verification «would have» finished sooner." },
      { type: "Alternative Scenario", kw: "alternatively, another possibility", def: "A different possible course or explanation.", ex: "«Alternatively», the applicant could submit another approved document." },
      { type: "Conditional Prediction", kw: "if this happens, then may", def: "A predicted outcome under a stated condition.", ex: "«If» the document is verified, the status «may» change to complete." },
      { type: "Goal / Purpose", kw: "in order to, so that, with the aim of", def: "The intended purpose of an action.", ex: "The applicant uploads the certificate «so that» the office can verify it." },
      { type: "Failure to Meet", kw: "fails to, does not satisfy, falls short", def: "A required criterion is not met.", ex: "The applicant «fails to» meet the minimum score requirement." },
    ],
    insight: "A hypothetical does NOT establish that something happened. A counterfactual describes what DIDN'T happen. Purpose does NOT prove the goal was achieved. Keep actual history unchanged."
  },

  // ── Section 12: Questions & Commands ──
  {
    title: "Questions, Commands & Expressions",
    subtitle: "Sections 14–15 — Questions, Commands, Requests, Warnings & Other Expressions",
    icon: "💬",
    intro: "Questions, commands, and requests don't have truth values like factual statements, but an AI system must process them to retrieve information or initiate authorized actions.",
    concepts: [
      { type: "Information Question", kw: "who, what, when, where, why, how", def: "Requests information about an entity, event, reason, or method.", ex: "«Who» submitted the application?" },
      { type: "Yes/No Question", kw: "is, does, has, can", def: "Requests a status that can be answered yes, no, or unknown.", ex: "«Is» Ali's application complete?" },
      { type: "Command", kw: "check, verify, approve, reject", def: "Requests an action to be performed.", ex: "«Verify» the submitted certificate." },
      { type: "Polite Request", kw: "please, kindly, could you", def: "A courteous service request.", ex: "«Please» show the application's current status." },
      { type: "Warning", kw: "be careful, do not, ensure that", def: "Highlights a risk or precaution.", ex: "«Do not» mark the fee as paid without confirmation." },
      { type: "Similarity", kw: "similar to, resembles, comparable", def: "Indicates resemblance — NOT identity.", ex: "The document is «similar to» the approved format." },
      { type: "Correction", kw: "rather, instead, more accurately", def: "Revises or replaces an earlier description.", ex: "The application is pending «rather» than rejected." },
      { type: "Source Attribution", kw: "according to, as reported by, based on", def: "Identifies the source a statement relies on.", ex: "«According to» the official record, the fee has been received." },
    ],
    insight: "Questions and commands don't have truth values in the way factual statements do. But understanding their type helps an AI route them correctly — to the right records, reasoning service, or authorized action."
  },

  // ── Section 13: 5-Step Analysis Method ──
  {
    title: "The 5-Step Analysis Method",
    subtitle: "Section 17 — A Simple Method for Analyzing Any Sentence",
    icon: "🔬",
    intro: "This is your toolkit for analyzing ANY natural language sentence in KRR. Follow these five steps systematically to identify what a sentence means, how it should be classified, and what reasoning applies.",
    concepts: [
      { type: "Step 1: Identify Purpose", kw: "fact? condition? rule? question? conclusion?", def: "Is the sentence stating a fact, expressing a condition, giving a rule, asking a question, or drawing a conclusion?", ex: "Ali «submitted» his application. → Purpose: stating a «fact»." },
      { type: "Step 2: Identify Key Words", kw: "and, unless, every, before, because, probably, must, therefore", def: "Look for signal words that reveal the logical structure.", ex: "«Unless» the fee is paid, the application may be cancelled. → Key word: «unless»." },
      { type: "Step 3: Classify Expression", kw: "logic, quantity, time, cause, uncertainty, obligation", def: "Determine what type of relationship or function the sentence expresses.", ex: "«Unless» → classification: «conditional exception»." },
      { type: "Step 4: Interpret Meaning", kw: "claims, conditions, exceptions, ambiguities", def: "Determine what the sentence actually claims, what conditions apply, and whether ambiguities exist.", ex: "'May' can mean «permission» or «possibility» — context decides." },
      { type: "Step 5: Assess Knowledge", kw: "established, reported, assumed, uncertain, inferred", def: "Ask whether the information is established, reported, assumed, uncertain, or inferred — and whether the conclusion is justified.", ex: "The applicant «reports» the fee was paid → «reported», not «verified»." },
    ],
    insight: "Understand the sentence's meaning BEFORE classifying its words. 'May' can express permission or possibility. 'Only' can impose a restriction. 'Because' introduces an explanation without proving causation. 'Therefore' introduces a conclusion without guaranteeing valid reasoning."
  },

  // ── Section 14: Final Concept Map ──
  {
    title: "The Big Picture",
    subtitle: "Section 18 — Four Families of KRR Expressions",
    icon: "🗺️",
    intro: "Everything you've learned falls into four broad families. Understanding these families helps you quickly categorize any new sentence you encounter.",
    concepts: [
      { type: "Representations of Knowledge", kw: "Facts, Entities, Properties, Relationships, Actions, Events", def: "WHAT does the system know or describe? These are the building blocks of any knowledge base.", ex: "Ali is an applicant → «Entity». Ali submitted his application → «Fact»." },
      { type: "Logical & Structural Expressions", kw: "AND, OR, NOT, IF, Quantifiers, Comparisons", def: "HOW are statements or conditions related? These define the logical structure connecting facts.", ex: "If documents are complete «AND» fee is paid → application proceeds." },
      { type: "Reasoning & Evidence Expressions", kw: "Cause, Evidence, Inference, Prediction, Uncertainty", def: "WHY might something be true, and how well is it supported? These assess the strength of claims.", ex: "The record «indicates» a possible error → «tentative inference»." },
      { type: "Operational & Contextual Expressions", kw: "Rules, Obligations, Time, Sequence, Questions, Commands", def: "WHEN does something apply, and what should an agent do? These govern action and process.", ex: "Applicants «must» submit documents «before» the deadline." },
    ],
    insight: "Recommended learning path: Understand sentences → Identify purpose & keywords → Classify relationships → Assess information & reasoning → Then produce symbolic representations."
  },
];

/* ====================================================
   LEARN SESSION ENGINE
   ==================================================== */
let learnIndex = 0;
const TOTAL_LEARN_SECTIONS = LEARN_SECTIONS.length;

function initLearnSession(targetIdx = 0) {
  learnIndex = Math.max(0, Math.min(Number(targetIdx) || 0, TOTAL_LEARN_SECTIONS - 1));
  renderLearnSection(learnIndex);
  showScreen('learn');
}

function renderLearnSection(idx) {
  const sec = LEARN_SECTIONS[idx];
  const area = document.getElementById('learnArea');
  area.innerHTML = '';

  // ── Section header ──
  const header = document.createElement('div');
  header.className = 'learn-section-header anim-fade-in';
  header.innerHTML = `
    <div class="learn-icon">${sec.icon}</div>
    <h2 class="learn-title">${sec.title}</h2>
    <p class="learn-subtitle">${sec.subtitle}</p>
  `;
  area.appendChild(header);

  // ── Intro text ──
  const intro = document.createElement('p');
  intro.className = 'learn-intro anim-fade-in';
  intro.style.animationDelay = '0.15s';
  intro.textContent = sec.intro;
  area.appendChild(intro);

  // ── Concept cards grid ──
  const grid = document.createElement('div');
  grid.className = 'learn-cards-grid';
  sec.concepts.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'learn-card anim-fade-in';
    card.style.animationDelay = (0.2 + i * 0.07) + 's';
    card.innerHTML = `
      <div class="learn-card-inner">
        <div class="learn-card-front">
          <div class="lc-type">${c.type}</div>
          <div class="lc-keywords">${c.kw}</div>
          <div class="lc-tap">tap to learn more</div>
        </div>
        <div class="learn-card-back">
          <div class="lc-def">${c.def}</div>
          <div class="lc-example">${renderExample(c.ex)}</div>
          <div class="lc-tap">tap to flip back</div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });
  area.appendChild(grid);

  // ── Key Insight box ──
  if (sec.insight) {
    const insight = document.createElement('div');
    insight.className = 'learn-insight anim-fade-in';
    insight.style.animationDelay = (0.3 + sec.concepts.length * 0.07) + 's';
    insight.innerHTML = `<span class="insight-icon">💡</span><span class="insight-label">Key Insight</span><p>${sec.insight}</p>`;
    area.appendChild(insight);
  }

  // ── Update navigation ──
  updateLearnNav(idx);

  // Scroll to top
  const scrollEl = document.getElementById('learnScroll');
  if (scrollEl) scrollEl.scrollTop = 0;
}

function renderExample(ex) {
  // Convert «keyword» markers to highlighted spans
  return ex.replace(/«([^»]+)»/g, '<span class="kw-highlight">$1</span>');
}

function updateLearnNav(idx) {
  // Progress dots
  const dotsEl = document.getElementById('learnDots');
  if (dotsEl) {
    dotsEl.innerHTML = '';
    for (let i = 0; i < TOTAL_LEARN_SECTIONS; i++) {
      const dot = document.createElement('div');
      dot.className = 'learn-dot' + (i === idx ? ' active' : '') + (i < idx ? ' done' : '');
      dot.title = LEARN_SECTIONS[i].title;
      dot.addEventListener('click', () => {
        learnIndex = i;
        renderLearnSection(i);
      });
      dotsEl.appendChild(dot);
    }
  }

  // Counter
  const counterEl = document.getElementById('learnCounter');
  if (counterEl) counterEl.textContent = `${idx + 1} / ${TOTAL_LEARN_SECTIONS}`;

  // Buttons
  const prevBtn = document.getElementById('learnPrevBtn');
  if (prevBtn) prevBtn.disabled = (idx === 0);

  const nextBtn = document.getElementById('learnNextBtn');
  if (nextBtn) {
    if (idx >= TOTAL_LEARN_SECTIONS - 1) {
      nextBtn.innerHTML = '<span>Start Game! 🎮</span>';
    } else {
      nextBtn.innerHTML = '<span>Continue</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    }
  }

  const titleEl = document.getElementById('learnSectionTitle');
  if (titleEl) titleEl.textContent = LEARN_SECTIONS[idx].title;
}

function learnPrev() {
  if (learnIndex > 0) {
    learnIndex--;
    renderLearnSection(learnIndex);
  }
}

function learnNext() {
  if (learnIndex < TOTAL_LEARN_SECTIONS - 1) {
    learnIndex++;
    renderLearnSection(learnIndex);
  } else {
    // Transition to game
    if (typeof startLevel === 'function') {
      startLevel(0);
    }
  }
}

// Attach event listeners once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('learnPrevBtn');
  if (prevBtn) prevBtn.addEventListener('click', learnPrev);

  const nextBtn = document.getElementById('learnNextBtn');
  if (nextBtn) nextBtn.addEventListener('click', learnNext);

  const skipBtn = document.getElementById('skipToGameBtn');
  if (skipBtn) skipBtn.addEventListener('click', () => {
    if (typeof startLevel === 'function') startLevel(0);
  });

  const backStartBtn = document.getElementById('learnBackToStartBtn');
  if (backStartBtn) backStartBtn.addEventListener('click', () => {
    if (typeof showScreen === 'function') showScreen('start');
  });
});


