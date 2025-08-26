import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamShowcase = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Founder & CEO",
      expertise: "Strategic Growth Architecture",
      previousCompanies: ["Google", "Y Combinator"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      philosophy: `Growth isn't about doing more—it's about amplifying what truly matters. Every strategy should have exponential potential built into its DNA.`,
      favoriteTactic: "Compound Growth Loops",
      personalInterest: "Rock climbing and behavioral psychology",
      achievements: [
        "Scaled 3 startups from $0 to $10M+ ARR",
        "Featured speaker at Growth Summit 2023",
        "Advisor to 12 Y Combinator companies"
      ],
      linkedinUrl: "https://linkedin.com/in/sarahchen",
      publishedContent: [
        "The Exponential Growth Playbook",
        "Why Most Growth Strategies Fail"
      ]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Head of Performance",
      expertise: "Data-Driven Scaling",
      previousCompanies: ["Facebook", "Shopify"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      philosophy: `Every dollar spent should be measurable, every campaign should be scalable, and every metric should drive decision-making.`,
      favoriteTactic: "Multi-Touch Attribution Modeling",
      personalInterest: "Jazz music and data visualization",
      achievements: [
        "Managed $50M+ in ad spend with 4.2x ROAS",
        "Built attribution systems for Fortune 500",
        "Created DESCALE\'s proprietary growth framework"
      ],
      linkedinUrl: "https://linkedin.com/in/marcusrodriguez",
      publishedContent: [
        "Attribution Modeling for Modern Marketers",
        "The Science of Scalable Campaigns"
      ]
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Creative Director",
      expertise: "Brand Storytelling & Visual Identity",
      previousCompanies: ["Airbnb", "Stripe"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      philosophy: `Great creative doesn't just look good—it drives behavior. Every design decision should serve the growth objective.`,
      favoriteTactic: "Emotional Trigger Mapping",
      personalInterest: "Film photography and urban sketching",
      achievements: [
        "Led rebrands that increased conversion by 300%+",
        "Won 5 Design Excellence Awards",
        "Created viral campaigns with 10M+ impressions"
      ],
      linkedinUrl: "https://linkedin.com/in/emmathompson",
      publishedContent: [
        "Design Psychology for Growth",
        "Visual Storytelling in the Digital Age"
      ]
    },
    {
      id: 4,
      name: "David Park",
      role: "Head of Innovation",
      expertise: "Emerging Technologies & Growth Hacking",
      previousCompanies: ["Tesla", "SpaceX"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      philosophy: `Innovation isn't about using the latest tech—it's about finding unconventional solutions to scaling challenges.`,
      favoriteTactic: "Interactive Experience Design",
      personalInterest: "Robotics and sustainable technology",
      achievements: [
        "Pioneered Interactive Taxi Ads platform",
        "Filed 3 patents in advertising technology",
        "Increased client engagement rates by 500%+"
      ],
      linkedinUrl: "https://linkedin.com/in/davidpark",
      publishedContent: [
        "The Future of Interactive Advertising",
        "Growth Hacking with Emerging Tech"
      ]
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Head of Analytics",
      expertise: "Growth Engineering & Data Science",
      previousCompanies: ["Netflix", "Uber"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      philosophy: `Data tells stories, but only if you know how to listen. Every insight should unlock a new growth opportunity.`,
      favoriteTactic: "Predictive Growth Modeling",
      personalInterest: "Machine learning and competitive chess",
      achievements: [
        "Built ML models predicting 90%+ accuracy",
        "Optimized funnels increasing LTV by 250%",
        "Created real-time growth dashboards"
      ],
      linkedinUrl: "https://linkedin.com/in/lisawang",
      publishedContent: [
        "Machine Learning for Growth Teams",
        "The Art of Growth Engineering"
      ]
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "Client Success Director",
      expertise: "Strategic Partnerships & Account Growth",
      previousCompanies: ["HubSpot", "Salesforce"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      philosophy: `Client success isn't about managing accounts—it's about becoming an extension of their growth team and driving mutual success.`,
      favoriteTactic: "Growth Partnership Frameworks",
      personalInterest: "Mentoring startups and marathon running",
      achievements: [
        "Maintained 98% client retention rate",
        "Grew average account value by 180%",
        "Mentored 50+ startup founders"
      ],
      linkedinUrl: "https://linkedin.com/in/alexjohnson",
      publishedContent: [
        "Building Strategic Growth Partnerships",
        "The Client Success Growth Playbook"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Growth Architects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet the Team Behind
            <span className="block text-secondary">Exponential Results</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Industry veterans from Google, Facebook, Y Combinator, and more—united by the mission
            to scale what truly matters for ambitious brands.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers?.map((member, index) => (
            <motion.div
              key={member?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-brand transition-all duration-300 hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                    <Image
                      src={member?.image}
                      alt={`${member?.name} - ${member?.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Plus" size={16} className="text-white" />
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{member?.name}</h3>
                    <p className="text-secondary font-medium">{member?.role}</p>
                  </div>

                  <p className="text-sm text-text-secondary">{member?.expertise}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member?.previousCompanies?.map((company) => (
                      <span
                        key={company}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {company}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-accent font-medium">Click to learn more</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e?.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/20">
                        <Image
                          src={selectedMember?.image}
                          alt={selectedMember?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{selectedMember?.name}</h3>
                        <p className="text-secondary font-medium">{selectedMember?.role}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedMember(null)}
                    >
                      <Icon name="X" size={20} />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Scaling Philosophy</h4>
                      <p className="text-text-secondary italic leading-relaxed">
                        "{selectedMember?.philosophy}"
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Favorite Growth Tactic</h4>
                        <p className="text-accent font-medium">{selectedMember?.favoriteTactic}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Personal Interest</h4>
                        <p className="text-text-secondary">{selectedMember?.personalInterest}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {selectedMember?.achievements?.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                            <span className="text-text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">Published Content</h4>
                      <div className="space-y-2">
                        {selectedMember?.publishedContent?.map((content, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="FileText" size={16} className="text-secondary" />
                            <span className="text-text-secondary">{content}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        iconName="Linkedin"
                        iconPosition="left"
                        onClick={() => window.open(selectedMember?.linkedinUrl, '_blank')}
                        className="w-full"
                      >
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TeamShowcase;