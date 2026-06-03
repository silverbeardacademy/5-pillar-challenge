import { useState, useEffect } from "react";

const PILLARS = [
  {
    pillar: 1,
    name: "LOYALTY",
    icon: "⚔️",
    color: "#C8A84B",
    definition:
      "Loyalty is the unwavering commitment to the people, values, and mission you have chosen. It is not blind obedience — it is conscious, deliberate allegiance. A loyal man does not abandon ship when things get hard. He shows up. Every time.",
    quote: "The strength of a man is measured by what he remains loyal to when no one is watching.",
    challenge: {
      title: "The Loyalty Audit",
      instruction:
        "Write down 3 relationships or commitments in your life where you have been showing up at less than 100%. For each one, write one specific action you will take THIS WEEK to recommit. Then reach out to one person who has always been loyal to you and tell them — out loud or in writing — what their loyalty has meant to you.",
      reflection: "Who have you been loyal to when it cost you something? That's where your character lives.",
    },
  },
  {
    pillar: 2,
    name: "HONOR",
    icon: "🛡️",
    color: "#B5451B",
    definition:
      "Honor is how you behave when the outcome doesn't benefit you. It's the code you live by when no one is grading you. An honorable man keeps his word not because he has to — but because breaking it would break something inside him.",
    quote: "Honor is not a reward. It's a standard. You either live by it or you don't.",
    challenge: {
      title: "The Honor Code",
      instruction:
        "Write your personal code of honor — 5 non-negotiable rules you live by as a man. Be specific and ruthless. Not 'be kind' — but 'I do not speak poorly of others behind their back.' Then identify one moment in the past 30 days where you violated your own code. Write what you will do differently.",
      reflection: "A man without a code is just reacting. A man with a code is leading.",
    },
  },
  {
    pillar: 3,
    name: "RESPECT",
    icon: "🤝",
    color: "#2E6B4F",
    definition:
      "Respect begins with self-respect. You cannot give what you don't have. Respect is earned through consistency, delivered through presence, and demonstrated by how you treat people who can do nothing for you. A man who respects himself commands respect without demanding it.",
    quote: "Respect is the currency of integrity. Spend it wisely and it multiplies.",
    challenge: {
      title: "The Respect Mirror",
      instruction:
        "Start with yourself: write 5 ways you have NOT been respecting yourself — your body, your time, your word, your potential. Choose ONE and commit to a 30-day change starting today. Then go out of your way to show genuine respect to someone who rarely receives it: a service worker, a family member you've taken for granted, someone younger who needs to be seen.",
      reflection: "How you treat others when you have power over them reveals everything.",
    },
  },
  {
    pillar: 4,
    name: "DISCIPLINE",
    icon: "🔥",
    color: "#1A3A5C",
    definition:
      "Discipline is freedom in disguise. Every man who lacks discipline believes he is free — and is actually a slave to his moods, impulses, and comfort. Discipline is the bridge between who you are and who you are capable of becoming. It is not punishment. It is the highest form of self-respect.",
    quote: "Discipline is choosing between what you want now and what you want most.",
    challenge: {
      title: "The Hard Yes",
      instruction:
        "Today you will do one thing you have been avoiding. Not tomorrow. Today. It can be a difficult conversation, a workout, cleaning out a space that represents stagnation, making a call you've been dreading. Do it before noon. Then establish ONE daily discipline — something small and executable — that you will do every single day for the next 30 days. Write it down. Start tomorrow.",
      reflection: "Every time you do what you said you would do, you become more of who you want to be.",
    },
  },
  {
    pillar: 5,
    name: "LEADERSHIP",
    icon: "👑",
    color: "#6B2D8B",
    definition:
      "Leadership is not a title. It's a decision — made daily, in small moments, with no applause. The men in your world are watching how you handle pressure, how you treat your family, how you respond to failure. You are already leading. The only question is: where are you taking them?",
    quote: "The greatest leader is not the one who does the most. It's the one who makes others believe they can.",
    challenge: {
      title: "The Leadership Letter",
      instruction:
        "Write a letter to the most important person you lead — your child, partner, team, or someone who looks up to you. Tell them your vision for the next year. Tell them what you are committed to becoming. Tell them what they can count on from you. You do not have to send it. But you must write it as if you will. Then identify one man in your circle who needs leadership and reach out to him today.",
      reflection: "Leadership is a gift you give to the future. Start giving it now.",
    },
  },
];

const TIERS = [
  {
    price: "$49.99",
    label: "FOUNDATION",
    tagline: "Start the journey",
    features: ["Bi-weekly group coaching calls", "Private community access", "Bi-weekly accountability check-in", "SBA Newsletter"],
    highlight: false,
  },
  {
    price: "$89.99",
    label: "WARRIOR",
    tagline: "Built for serious men",
    features: [
      "Everything in Foundation",
      "Bi-weekly 1-on-1 strategy session",
      "Full curriculum access",
      "Direct mentor messaging",
    ],
    highlight: true,
  },
  {
    price: "$189.99",
    label: "ELITE",
    tagline: "For men who lead",
    features: [
      "Everything in Warrior",
      "Weekly private 1-on-1 coaching",
      "Monthly VIP hot seat coaching session",
      "Monthly guest expert sessions",
      "Priority access to new programs before public launch",
      "Direct voice message access to your coach",
    ],
    highlight: false,
  },
];

export default function App() {
  const [screen, setScreen] = useState("intro"); // intro | challenge | complete
  const [activeDay, setActiveDay] = useState(0);
  const [completed, setCompleted] = useState({});
  const [reflections, setReflections] = useState({});
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateIn(true), 100);
  }, [screen, activeDay]);

  const pillar = PILLARS[activeDay];
  const completedCount = Object.keys(completed).length;

  const handleComplete = () => {
    setCompleted((prev) => ({ ...prev, [activeDay]: true }));
  };

  const goToDay = (idx) => {
    setAnimateIn(false);
    setTimeout(() => {
      setActiveDay(idx);
      setAnimateIn(true);
    }, 200);
  };

  // ── INTRO SCREEN ──────────────────────────────────────────────────────────
  if (screen === "intro") {
    return (
      <div style={styles.page}>
        <div style={styles.grain} />
        <div style={{ ...styles.introWrap, opacity: animateIn ? 1 : 0, transform: animateIn ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
          <div style={styles.badge}>5-DAY CHALLENGE</div>
          <h1 style={styles.heroTitle}>
            THE FIVE<br />
            <span style={styles.heroAccent}>PILLARS</span>
          </h1>
          <p style={styles.heroSub}>
            Loyalty. Honor. Respect. Discipline. Leadership.
          </p>
          <p style={styles.heroBody}>
            This is not a self-help program. This is a reckoning. Five days. Five pillars. One decision about the man you choose to be — starting right now.
          </p>
          <div style={styles.pillarRow}>
            {PILLARS.map((p) => (
              <div key={p.name} style={{ ...styles.pillarChip, borderColor: p.color }}>
                <span style={{ fontSize: 18 }}>{p.icon}</span>
                <span style={{ ...styles.chipLabel, color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
          <button
            style={styles.ctaBtn}
            onClick={() => { setScreen("challenge"); setAnimateIn(false); setTimeout(() => setAnimateIn(true), 200); }}
          >
            BEGIN THE CHALLENGE →
          </button>
        </div>
      </div>
    );
  }

  // ── COMPLETION SCREEN ─────────────────────────────────────────────────────
  if (screen === "complete") {
    return (
      <div style={styles.page}>
        <div style={styles.grain} />
        <div style={{ ...styles.introWrap, opacity: animateIn ? 1 : 0, transition: "opacity 0.7s ease" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🏆</div>
          <div style={styles.badge}>CHALLENGE COMPLETE</div>
          <h1 style={{ ...styles.heroTitle, fontSize: "clamp(36px, 8vw, 64px)" }}>
            YOU SHOWED<br /><span style={styles.heroAccent}>UP.</span>
          </h1>
          <p style={styles.heroBody}>
            Five days. Five pillars. You defined what you stand for, you acted on it, and you proved it to yourself. That's not nothing. That's everything.
          </p>
          <p style={{ ...styles.heroBody, fontWeight: 700, color: "#C8A84B", marginBottom: 8 }}>
            Now choose your next step.
          </p>
          <p style={{ ...styles.heroBody, marginBottom: 40 }}>
            You've built the foundation. The question is how far you want to go.
          </p>

          <div style={styles.tierGrid}>
            {TIERS.map((tier) => (
              <div key={tier.label} style={{ ...styles.tierCard, ...(tier.highlight ? styles.tierHighlight : {}) }}>
                {tier.highlight && <div style={styles.popularBadge}>MOST POPULAR</div>}
                <div style={styles.tierPrice}>{tier.price}<span style={styles.tierPer}>/mo</span></div>
                <div style={styles.tierLabel}>{tier.label}</div>
                <div style={styles.tierTagline}>{tier.tagline}</div>
                <ul style={styles.featureList}>
                  {tier.features.map((f) => (
                    <li key={f} style={styles.featureItem}>✓ {f}</li>
                  ))}
                </ul>
                <button style={{ ...styles.tierBtn, ...(tier.highlight ? styles.tierBtnHighlight : {}) }}>
                  JOIN {tier.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── CHALLENGE SCREEN ──────────────────────────────────────────────────────
  return (
    <div style={styles.page}>
      <div style={styles.grain} />

      {/* Top Nav */}
      <div style={styles.topNav}>
        <span style={styles.navBrand}>5 PILLARS</span>
        <div style={styles.progressPills}>
          {PILLARS.map((p, i) => (
            <button
              key={i}
              onClick={() => goToDay(i)}
              style={{
                ...styles.pill,
                backgroundColor: completed[i] ? p.color : activeDay === i ? "#fff" : "rgba(255,255,255,0.15)",
                color: completed[i] || activeDay === i ? "#0a0a0a" : "rgba(255,255,255,0.5)",
                transform: activeDay === i ? "scale(1.15)" : "scale(1)",
              }}
              title={p.name}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <span style={styles.navCount}>{completedCount}/5</span>
      </div>

      {/* Main Content */}
      <div
        style={{
          ...styles.challengeWrap,
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.4s ease",
        }}
      >
        {/* Day Header */}
        <div style={styles.dayHeader}>
          <div style={{ ...styles.dayTag, color: pillar.color, borderColor: pillar.color }}>
            DAY {pillar.day}
          </div>
          <div style={styles.pillarIcon}>{pillar.icon}</div>
          <h2 style={{ ...styles.pillarTitle, color: pillar.color }}>{pillar.name}</h2>
        </div>

        {/* Definition */}
        <div style={styles.card}>
          <div style={{ ...styles.cardLabel, color: pillar.color }}>DEFINITION</div>
          <p style={styles.cardBody}>{pillar.definition}</p>
        </div>

        {/* Quote */}
        <div style={{ ...styles.quoteBlock, borderLeftColor: pillar.color }}>
          <p style={styles.quoteText}>"{pillar.quote}"</p>
        </div>

        {/* Challenge */}
        <div style={{ ...styles.card, borderColor: pillar.color }}>
          <div style={{ ...styles.cardLabel, color: pillar.color }}>TODAY'S CHALLENGE — {pillar.challenge.title}</div>
          <p style={styles.cardBody}>{pillar.challenge.instruction}</p>
        </div>

        {/* Reflection */}
        <div style={styles.reflectionBox}>
          <div style={styles.reflectionLabel}>REFLECT ON THIS</div>
          <p style={styles.reflectionText}>{pillar.challenge.reflection}</p>
        </div>

        {/* Notes */}
        <div style={styles.notesWrap}>
          <div style={styles.cardLabel}>YOUR NOTES</div>
          <textarea
            style={styles.textarea}
            placeholder="Write your thoughts, commitments, or breakthroughs here..."
            value={reflections[activeDay] || ""}
            onChange={(e) => setReflections((prev) => ({ ...prev, [activeDay]: e.target.value }))}
          />
        </div>

        {/* Actions */}
        <div style={styles.actionRow}>
          {!completed[activeDay] ? (
            <button style={{ ...styles.completeBtn, backgroundColor: pillar.color }} onClick={handleComplete}>
              ✓ MARK DAY {pillar.day} COMPLETE
            </button>
          ) : (
            <div style={{ ...styles.doneTag, color: pillar.color, borderColor: pillar.color }}>
              ✓ DAY {pillar.day} COMPLETE
            </div>
          )}

          {activeDay < 4 && completed[activeDay] && (
            <button style={styles.nextBtn} onClick={() => goToDay(activeDay + 1)}>
              NEXT PILLAR →
            </button>
          )}

          {completedCount === 5 && (
            <button
              style={styles.finishBtn}
              onClick={() => { setScreen("complete"); setAnimateIn(false); setTimeout(() => setAnimateIn(true), 200); }}
            >
              🏆 FINISH CHALLENGE
            </button>
          )}
        </div>

        {activeDay > 0 && (
          <button style={styles.backLink} onClick={() => goToDay(activeDay - 1)}>
            ← Back to Day {activeDay}
          </button>
        )}
      </div>
    </div>
  );
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0a0a0a",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: "#f0ece4",
    position: "relative",
    overflowX: "hidden",
  },
  grain: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
    pointerEvents: "none",
    zIndex: 0,
  },
  introWrap: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "80px 24px 100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  badge: {
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: "0.3em",
    color: "#C8A84B",
    border: "1px solid #C8A84B",
    padding: "6px 16px",
    marginBottom: 32,
    textTransform: "uppercase",
  },
  heroTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(52px, 12vw, 96px)",
    fontWeight: 900,
    lineHeight: 0.9,
    margin: "0 0 16px",
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
  },
  heroAccent: {
    color: "#C8A84B",
    fontStyle: "italic",
  },
  heroSub: {
    fontFamily: "'Courier New', monospace",
    fontSize: "clamp(11px, 2vw, 13px)",
    letterSpacing: "0.25em",
    color: "rgba(240,236,228,0.5)",
    marginBottom: 32,
    textTransform: "uppercase",
  },
  heroBody: {
    fontSize: "clamp(15px, 2.5vw, 18px)",
    lineHeight: 1.75,
    color: "rgba(240,236,228,0.8)",
    maxWidth: 580,
    marginBottom: 40,
  },
  pillarRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    marginBottom: 48,
  },
  pillarChip: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid",
    padding: "8px 16px",
    borderRadius: 2,
  },
  chipLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: "0.2em",
    fontWeight: 700,
  },
  ctaBtn: {
    backgroundColor: "#C8A84B",
    color: "#0a0a0a",
    border: "none",
    padding: "18px 48px",
    fontSize: 14,
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.2em",
    fontWeight: 700,
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  topNav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 24px",
    backgroundColor: "rgba(10,10,10,0.95)",
    borderBottom: "1px solid rgba(200,168,75,0.2)",
    backdropFilter: "blur(8px)",
  },
  navBrand: {
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: "0.3em",
    color: "#C8A84B",
  },
  progressPills: {
    display: "flex",
    gap: 8,
  },
  pill: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "none",
    fontSize: 12,
    fontFamily: "'Courier New', monospace",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  navCount: {
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    color: "rgba(240,236,228,0.4)",
    letterSpacing: "0.1em",
  },
  challengeWrap: {
    maxWidth: 700,
    margin: "0 auto",
    padding: "48px 24px 100px",
    position: "relative",
    zIndex: 1,
  },
  dayHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 36,
  },
  dayTag: {
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: "0.3em",
    border: "1px solid",
    padding: "4px 12px",
    marginBottom: 16,
    display: "inline-block",
  },
  pillarIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  pillarTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(42px, 10vw, 80px)",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    margin: 0,
    lineHeight: 1,
  },
  card: {
    border: "1px solid rgba(240,236,228,0.1)",
    padding: "28px",
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,0.02)",
  },
  cardLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: 10,
    letterSpacing: "0.3em",
    marginBottom: 14,
    textTransform: "uppercase",
  },
  cardBody: {
    fontSize: 16,
    lineHeight: 1.8,
    color: "rgba(240,236,228,0.85)",
    margin: 0,
  },
  quoteBlock: {
    borderLeft: "3px solid",
    paddingLeft: 24,
    marginBottom: 20,
    marginLeft: 0,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: "italic",
    lineHeight: 1.6,
    color: "rgba(240,236,228,0.7)",
    margin: 0,
  },
  reflectionBox: {
    backgroundColor: "rgba(200,168,75,0.05)",
    border: "1px solid rgba(200,168,75,0.2)",
    padding: "24px 28px",
    marginBottom: 24,
  },
  reflectionLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: 10,
    letterSpacing: "0.3em",
    color: "#C8A84B",
    marginBottom: 12,
  },
  reflectionText: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "rgba(240,236,228,0.75)",
    fontStyle: "italic",
    margin: 0,
  },
  notesWrap: {
    marginBottom: 32,
  },
  textarea: {
    width: "100%",
    minHeight: 120,
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(240,236,228,0.12)",
    color: "#f0ece4",
    fontFamily: "'Georgia', serif",
    fontSize: 15,
    lineHeight: 1.7,
    padding: "16px",
    resize: "vertical",
    outline: "none",
    boxSizing: "border-box",
    marginTop: 12,
  },
  actionRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  completeBtn: {
    border: "none",
    padding: "16px 32px",
    color: "#0a0a0a",
    fontSize: 13,
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.15em",
    fontWeight: 700,
    cursor: "pointer",
    textTransform: "uppercase",
  },
  doneTag: {
    fontFamily: "'Courier New', monospace",
    fontSize: 13,
    letterSpacing: "0.15em",
    border: "1px solid",
    padding: "14px 28px",
  },
  nextBtn: {
    backgroundColor: "transparent",
    border: "1px solid rgba(240,236,228,0.3)",
    color: "#f0ece4",
    padding: "16px 28px",
    fontSize: 12,
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.15em",
    cursor: "pointer",
  },
  finishBtn: {
    backgroundColor: "#C8A84B",
    border: "none",
    color: "#0a0a0a",
    padding: "18px 36px",
    fontSize: 13,
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.15em",
    fontWeight: 700,
    cursor: "pointer",
    textTransform: "uppercase",
  },
  backLink: {
    background: "none",
    border: "none",
    color: "rgba(240,236,228,0.3)",
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: "0.15em",
    cursor: "pointer",
    padding: 0,
  },
  // Completion screen
  tierGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
    width: "100%",
    maxWidth: 900,
  },
  tierCard: {
    flex: "1 1 220px",
    maxWidth: 280,
    border: "1px solid rgba(240,236,228,0.12)",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.02)",
  },
  tierHighlight: {
    border: "1px solid #C8A84B",
    backgroundColor: "rgba(200,168,75,0.05)",
  },
  popularBadge: {
    position: "absolute",
    top: -1,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#C8A84B",
    color: "#0a0a0a",
    fontFamily: "'Courier New', monospace",
    fontSize: 9,
    letterSpacing: "0.2em",
    padding: "4px 12px",
    whiteSpace: "nowrap",
  },
  tierPrice: {
    fontSize: 42,
    fontWeight: 900,
    fontFamily: "'Georgia', serif",
    color: "#C8A84B",
    lineHeight: 1,
    marginBottom: 4,
    marginTop: 12,
  },
  tierPer: {
    fontSize: 16,
    fontWeight: 400,
    color: "rgba(240,236,228,0.4)",
  },
  tierLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: "0.3em",
    color: "rgba(240,236,228,0.5)",
    marginBottom: 4,
  },
  tierTagline: {
    fontSize: 14,
    fontStyle: "italic",
    color: "rgba(240,236,228,0.6)",
    marginBottom: 20,
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 24px",
    width: "100%",
  },
  featureItem: {
    fontSize: 13,
    color: "rgba(240,236,228,0.75)",
    marginBottom: 8,
    lineHeight: 1.5,
  },
  tierBtn: {
    width: "100%",
    padding: "14px",
    backgroundColor: "transparent",
    border: "1px solid rgba(240,236,228,0.25)",
    color: "#f0ece4",
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: "0.2em",
    cursor: "pointer",
    textTransform: "uppercase",
    marginTop: "auto",
  },
  tierBtnHighlight: {
    backgroundColor: "#C8A84B",
    border: "1px solid #C8A84B",
    color: "#0a0a0a",
    fontWeight: 700,
  },
};
