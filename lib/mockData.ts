export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'AI' | 'Tech' | 'Robotics';
  publishedDate: string;
  author: string;
  readTime: string;
}

export const mockArticles: Article[] = [
  {
    id: '1',
    title: "AI giants join forces on Genesis Mission",
    summary: "Major AI companies collaborate on groundbreaking initiative to advance artificial intelligence research.",
    content: `In a historic move, leading AI companies have announced their collaboration on the Genesis Mission, a comprehensive initiative aimed at advancing artificial intelligence research while ensuring ethical development and deployment.

The Genesis Mission brings together researchers, engineers, and ethicists from across the industry to tackle some of the most pressing challenges in AI development. The initiative focuses on three core pillars: safety, accessibility, and innovation.

Safety remains a top priority, with the collaboration establishing new frameworks for responsible AI development. The participating companies have committed to sharing best practices and conducting joint research on AI alignment and safety protocols.

Accessibility is another key focus, with plans to democratize AI tools and knowledge. The mission includes educational programs, open-source contributions, and support for smaller organizations and researchers.

Innovation drives the third pillar, with collaborative research projects spanning multiple domains including natural language processing, computer vision, and robotics. Early results show promising advances in multimodal AI systems.

"This collaboration represents a new era in AI development," said Dr. Sarah Chen, lead researcher on the project. "By working together, we can accelerate progress while maintaining the highest standards of safety and ethics."

The Genesis Mission is expected to run for the next five years, with regular updates and milestone releases planned. Industry experts have praised the initiative as a model for future collaborative efforts in technology development.`,
    category: 'AI',
    publishedDate: '2024-01-15',
    author: 'Zach Mink',
    readTime: '7 minutes'
  },
  {
    id: '2',
    title: "Top 5 robotics trends this year",
    summary: "Discover the most impactful robotics innovations shaping industries in 2024.",
    content: `Robotics continues to evolve at a rapid pace, with several key trends emerging this year that are reshaping industries from manufacturing to healthcare.

**1. Human-Robot Collaboration**
Cobots, or collaborative robots, are becoming increasingly sophisticated. These robots work alongside humans, enhancing productivity while maintaining safety. Advances in force-sensing technology and adaptive learning algorithms have made cobots more intuitive and responsive.

**2. Autonomous Mobile Robots (AMRs)**
Warehouse and logistics operations are being transformed by AMRs. These intelligent robots navigate complex environments independently, optimizing supply chain efficiency. Integration with AI systems enables real-time decision-making and route optimization.

**3. Soft Robotics**
The development of soft, flexible robots is opening new possibilities in delicate operations. Medical applications benefit significantly, with soft robots enabling minimally invasive procedures and patient care applications.

**4. AI-Powered Vision Systems**
Modern robots rely on advanced computer vision powered by AI. These systems enable robots to recognize objects, navigate environments, and perform quality inspections with unprecedented accuracy.

**5. Swarm Robotics**
The coordination of multiple robots working as a cohesive unit represents a major advancement. Swarm robotics finds applications in search and rescue, agricultural monitoring, and environmental sensing.

These trends collectively point toward a future where robots are more intelligent, adaptable, and seamlessly integrated into our daily lives and work environments.`,
    category: 'Robotics',
    publishedDate: '2024-01-14',
    author: 'Jennifer Mossalgue',
    readTime: '5 minutes'
  },
  {
    id: '3',
    title: "Google's Flash-y new Gemini 3 release",
    summary: "Google unveils Gemini 3 Flash and Gemini 3 Pro with significant performance improvements and new capabilities.",
    content: `Google has announced the release of Gemini 3, featuring two distinct models: Gemini 3 Flash and Gemini 3 Pro. The new release represents a significant leap forward in AI capabilities and efficiency.

**Gemini 3 Flash: Speed Meets Intelligence**

Gemini 3 Flash is designed for rapid responses while maintaining high-quality outputs. Benchmarks show it achieving response times up to 60% faster than previous models while maintaining comparable accuracy. This makes it ideal for real-time applications, customer support systems, and interactive experiences.

**Gemini 3 Pro: Advanced Capabilities**

The Pro variant targets complex reasoning tasks, multimodal understanding, and long-context processing. With expanded context windows and improved reasoning capabilities, Gemini 3 Pro handles sophisticated queries that previously required human expertise.

**Key Improvements**

Both models feature enhanced multilingual support, with improved performance across 100+ languages. The models also show significant improvements in code generation, mathematical reasoning, and creative writing tasks.

Multimodal capabilities have been expanded, allowing seamless integration of text, images, audio, and video inputs. This enables more natural and context-aware interactions.

**Real-World Applications**

Early adopters report impressive results across various domains:
- Educational platforms leveraging improved tutoring capabilities
- Research institutions benefiting from enhanced data analysis
- Creative industries utilizing advanced content generation features

Google has made both models available through their API platform, with flexible pricing tiers designed to accommodate different use cases and scales.`,
    category: 'AI',
    publishedDate: '2024-01-13',
    author: 'Alex Rivera',
    readTime: '6 minutes'
  },
  {
    id: '4',
    title: "OpenAI answers Google with major image upgrade",
    summary: "OpenAI releases significant improvements to image generation and understanding capabilities.",
    content: `In response to recent advances by competitors, OpenAI has unveiled major upgrades to its image generation and understanding systems. The announcement comes as competition in the AI space intensifies.

**Enhanced Image Generation**

The updated system produces images with significantly higher resolution and detail. Improvements in prompt understanding allow for more accurate interpretation of complex requests, resulting in images that better match user intent.

Color accuracy and consistency have been improved, addressing previous limitations in handling specific color palettes and maintaining consistency across image series.

**Improved Image Understanding**

Vision capabilities have been expanded, enabling the system to analyze images with greater precision. The model can now identify subtle details, understand context, and provide more nuanced descriptions.

New capabilities include:
- Scene understanding and object relationship mapping
- Enhanced text extraction from images
- Improved recognition of artistic styles and techniques

**Multimodal Integration**

The update strengthens the integration between text and image modalities. Users can now reference images in conversations more naturally, and the system can maintain context across both text and visual inputs.

**Developer Tools**

OpenAI has also released new developer tools and APIs that make it easier to integrate these capabilities into applications. Updated documentation and example code help developers quickly implement image features.

**Performance Metrics**

Initial benchmarks show:
- 40% improvement in image generation speed
- 30% increase in image quality scores
- 50% better accuracy in image understanding tasks

The release positions OpenAI to compete more effectively in the rapidly evolving AI landscape, with particular strength in creative and multimodal applications.`,
    category: 'AI',
    publishedDate: '2024-01-12',
    author: 'Maria Santos',
    readTime: '8 minutes'
  },
  {
    id: '5',
    title: "OpenAI eyes $830B mega-valuation",
    summary: "OpenAI is reportedly seeking a valuation that would place it among the world's most valuable companies.",
    content: `OpenAI is in discussions that could value the company at $830 billion, according to sources familiar with the matter. This would make it one of the most valuable private companies in history.

**Valuation Context**

The potential valuation reflects OpenAI's dominant position in the AI market and its rapid revenue growth. The company has seen explosive adoption of its ChatGPT platform and API services, with millions of users and developers building on its infrastructure.

**Market Position**

OpenAI's technology powers countless applications across industries:
- Enterprise software integrations
- Educational platforms
- Creative tools and applications
- Research and development initiatives

This broad adoption creates multiple revenue streams and demonstrates the platform's versatility and value proposition.

**Investment Landscape**

The AI sector has seen unprecedented investment activity, with companies racing to establish leadership positions. OpenAI's valuation discussions come amid a broader trend of high valuations for AI companies, reflecting investor confidence in the technology's transformative potential.

**Strategic Considerations**

A valuation of this magnitude would provide OpenAI with significant capital for:
- Research and development expansion
- Infrastructure scaling
- Strategic partnerships and acquisitions
- International market expansion

**Industry Implications**

Such a valuation would have broader implications for the AI industry, potentially influencing how other companies in the space are valued and how investors assess the sector's growth potential.

Discussions are ongoing, and terms could change. However, the reported valuation range highlights the enormous value investors see in leading AI platforms and technologies.`,
    category: 'Tech',
    publishedDate: '2024-01-11',
    author: 'David Kim',
    readTime: '5 minutes'
  },
  {
    id: '6',
    title: "The future of human-AI collaboration",
    summary: "Exploring how AI assistants are reshaping work and creativity through seamless collaboration.",
    content: `As AI systems become more sophisticated, the nature of human-AI collaboration is evolving. Rather than replacing human capabilities, advanced AI is augmenting and enhancing human work across numerous domains.

**Collaborative Models**

Modern AI systems are designed to work alongside humans, not in isolation. In creative fields, AI serves as a brainstorming partner, generating ideas that humans can refine and develop. In technical domains, AI handles routine tasks while humans focus on strategic decision-making.

**Productivity Enhancement**

Studies show that workers using AI assistants report significant productivity gains. The key is thoughtful integration that leverages AI strengths while preserving human judgment and creativity. This balanced approach maximizes both efficiency and quality.

**Creative Industries**

In creative work, AI collaboration takes on unique characteristics. Writers use AI for research and initial drafts, then apply human creativity to refine and personalize content. Designers leverage AI for iteration and exploration, then select and enhance the most promising directions.

**Technical Fields**

Software development exemplifies effective collaboration. AI handles code generation, testing, and documentation, while developers focus on architecture, problem-solving, and user experience. This division of labor optimizes both speed and quality.

**Challenges and Opportunities**

Effective collaboration requires understanding both AI capabilities and limitations. Training programs are emerging to help professionals work effectively with AI systems. Organizations are developing best practices for AI integration that maximize benefits while maintaining human oversight.

The future belongs to teams that master the art of human-AI collaboration, combining the unique strengths of both.`,
    category: 'AI',
    publishedDate: '2024-01-10',
    author: 'Emma Thompson',
    readTime: '9 minutes'
  }
];

