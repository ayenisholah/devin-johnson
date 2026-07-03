export const PROFILE = {
  name: "Devin Johnson",
  title: "Senior AI Engineer",
  location: "Kansas City, MO",
  email: "devincjohn@outlook.com",
  phone: "(646) 470-1356",
  phoneHref: "tel:+16464701356",
  linkedin: "https://linkedin.com/in/devin-johnson-a198503b9",
  resume: "/Devin_Johnson_Resume.pdf",
  available: true
} as const;

export const WORDS = [
  "70M+ streaming accounts",
  "5B+ daily predictions",
  "petabyte-scale voice AI",
  "real-time personalization",
  "fintech risk models"
] as const;

export const HERO_KICKER = "Senior AI Engineer · Kansas City, MO";
export const HERO_LEAD = "I design & ship production ML for";
export const HERO_BODY =
  "10+ years building large-scale, real-time machine-learning and deep-learning systems across streaming media and fintech — recommendation systems, NLP, MLOps, and distributed model serving on Kubernetes. I turn models into measurable business outcomes.";

export const TERMINAL = {
  systems: "real-time ML at scale",
  impact: "+18% engagement · 5B+ preds/day",
  stack: ["PyTorch", "ONNX", "K8s", "Kafka"],
  uptime: "99.99%"
} as const;

export const METRICS = [
  { label: "Engagement lift", target: 18, prefix: "+", suffix: "%", decimals: 0, note: "across 70M+ accounts · Roku" },
  { label: "Predictions / day", target: 5, prefix: "", suffix: "B+", decimals: 0, note: "served in real time on K8s" },
  { label: "Serving uptime", target: 99.99, prefix: "", suffix: "%", decimals: 2, note: "at 5B+ daily predictions" },
  { label: "Years in ML", target: 10, prefix: "", suffix: "+", decimals: 0, note: "streaming media & fintech" }
] as const;

export const ABOUT_TITLE = "A decade turning models into measurable outcomes.";
export const ABOUT_P1 =
  "I'm a Senior AI Engineer specializing in the unglamorous half of machine learning: the pipelines, serving infrastructure, and MLOps that let models run reliably at enterprise scale. I've shipped recommendation and personalization systems for 70M+ streaming accounts, petabyte-scale voice-AI data platforms, and credit-risk models in production fintech.";
export const ABOUT_P2 =
  "My work consistently moves the metrics that matter — engagement, latency, revenue, and reliability — while keeping deployment fast and operations calm. I lead cross-functional efforts end to end, from architecture through 99.99%-uptime production serving.";
export const FOCUS_CHIPS = ["Recommendation Systems", "NLP", "MLOps", "Distributed Serving"] as const;
export const ABOUT_FACTS = [
  ["location", "Kansas City, MO"],
  ["experience", "10+ years"],
  ["currently", "Sr. AI Eng @ Roku"],
  ["education", "B.S. Computer Science"]
] as const;

export const CASES = [
  {
    company: "Roku",
    period: "2023 — Present",
    title: "Real-time personalization for 70M+ streaming accounts",
    desc: "Architected deep-learning recommendation and personalization models, then engineered the low-latency serving pipeline to run them across billions of daily predictions without breaking the SLA.",
    stack: ["PyTorch", "ONNX", "AWS", "Kubernetes"],
    results: [
      ["+22%", "click-through rate, with +19% ad revenue in two quarters"],
      ["−35%", "serving latency across 5B+ daily predictions via ONNX"],
      ["99.99%", "availability, scaling model serving on Kubernetes"]
    ]
  },
  {
    company: "Mycroft AI",
    period: "2019 — 2023",
    title: "Petabyte-scale data platform for voice AI",
    desc: "Led the data infrastructure behind Transformer-based ASR training — lakehouse architecture, real-time streaming, and monitoring that kept a petabyte-scale platform fast, cheap, and reliable.",
    stack: ["BigQuery", "Kafka", "Flink", "GCP"],
    results: [
      ["−80%", "data-preparation time via lakehouse architecture"],
      ["10M+", "sessions/day processed, +45% pipeline efficiency"],
      ["$480K", "annual savings migrating AWS → GCP (−20%)"]
    ]
  },
  {
    company: "Enova International",
    period: "2016 — 2019",
    title: "ML credit scoring in production fintech",
    desc: "Integrated ML models into credit-decisioning and rebuilt the backend to serve them — high-throughput, low-latency, and safe to deploy via shadow traffic and automated rollbacks.",
    stack: ["Python", "Go", "Microservices", "gRPC"],
    results: [
      ["−18%", "loss rates through more accurate credit scoring"],
      ["5K+", "requests/sec at <100ms latency"],
      ["−30%", "response time via serialization & caching"]
    ]
  }
] as const;

export const ROLES = [
  {
    period: "09/2023 — Present",
    current: true,
    title: "Senior AI Engineer",
    company: "Roku",
    summary: "Elevated Roku's ML capabilities in recommendation systems, lifting user engagement and ad revenue at massive scale.",
    points: [
      "Architected deep-learning models lifting engagement 18% across 70M+ accounts (PyTorch, AWS).",
      "Built low-latency ONNX pipelines cutting serving latency 35% over 5B+ daily predictions.",
      "Designed an A/B/n framework raising retention 12% and tripling decision velocity.",
      "Scaled model serving on Kubernetes at 99.99% availability."
    ]
  },
  {
    period: "05/2019 — 02/2023",
    current: false,
    title: "Senior Data Engineer",
    company: "Mycroft AI Inc",
    summary: "Led the data infrastructure powering Transformer-based ASR training for voice-AI products at petabyte scale.",
    points: [
      "Optimized feature pipelines processing 10M+ sessions/day, +45% efficiency.",
      "Designed BigQuery lakehouse architectures cutting data-prep time 80%.",
      "Built real-time streaming with Kafka and Flink for rapid inference feedback loops.",
      "Migrated AWS → GCP, cutting cloud costs 20% (~$480K/yr)."
    ]
  },
  {
    period: "08/2016 — 04/2019",
    current: false,
    title: "Software Engineer",
    company: "Enova International",
    summary: "Integrated ML into credit decisioning and re-architected backend services for high-throughput, low-latency serving.",
    points: [
      "Integrated ML credit-scoring models reducing loss rates 18%.",
      "Built Python/Go services at 5K+ req/sec with <100ms latency.",
      "Shipped safely with shadow traffic and automated rollbacks.",
      "Refactored monoliths into microservices for better ML integration."
    ]
  },
  {
    period: "06/2014 — 08/2016",
    current: false,
    title: "Data Science Researcher",
    company: "Civis Analytics",
    summary: "Delivered predictive analytics to sharpen audience targeting and engagement for enterprise clients.",
    points: [
      "Built predictive models on millions of records to boost audience engagement.",
      "Applied uplift modeling in A/B testing to quantify campaign impact.",
      "Engineered features improving model accuracy 12–18%."
    ]
  }
] as const;

export const SKILLS = [
  { idx: "01", label: "AI / ML", items: ["Machine Learning", "Deep Learning", "Transformers", "BERT", "Recommendation Systems", "NLP", "Model Monitoring", "Drift Detection", "Vector Databases"] },
  { idx: "02", label: "ML Infra & Serving", items: ["PyTorch", "ONNX", "Triton", "Kubernetes", "Docker", "Terraform", "Prometheus", "CI/CD"] },
  { idx: "03", label: "Data", items: ["Apache Spark", "Airflow", "Kafka", "Flink", "BigQuery", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { idx: "04", label: "Backend", items: ["Python", "Go", "Microservices", "REST", "gRPC", "Event-Driven"] },
  { idx: "05", label: "Cloud", items: ["AWS", "GCP"] },
  { idx: "06", label: "Frontend", items: ["React", "Next.js", "TypeScript"] }
] as const;

export const CONTACT_TITLE = "Let's build ML that scales.";
export const CONTACT_BODY =
  "Open to senior AI / ML engineering roles and hard problems in real-time systems. The fastest way to reach me is email.";
