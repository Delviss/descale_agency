import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceModal = ({ service, isOpen, onClose, onBookCall }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name={service?.icon} size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">{service?.title}</h2>
              <p className="text-text-secondary">Complete Service Overview</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover-brand"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Methodology */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Target" size={20} className="text-primary mr-2" />
              Our Methodology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service?.methodology?.map((step, index) => (
                <div key={index} className="p-4 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-text-primary">{step?.title}</h4>
                  </div>
                  <p className="text-sm text-text-secondary">{step?.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Package" size={20} className="text-primary mr-2" />
              What You'll Receive
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service?.deliverables?.map((deliverable, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                  <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                  <span className="text-sm text-text-primary">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Clock" size={20} className="text-primary mr-2" />
              Project Timeline
            </h3>
            <div className="bg-surface rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-text-secondary">Typical Duration</span>
                <span className="text-lg font-bold text-primary">{service?.timeline}</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-gradient-brand h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-xs text-text-secondary mt-2">Timeline varies based on project scope and complexity</p>
            </div>
          </div>

          {/* Case Studies Preview */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="TrendingUp" size={20} className="text-primary mr-2" />
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service?.caseStudies?.map((study, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:border-primary transition-colors duration-300">
                  <h4 className="font-semibold text-text-primary mb-2">{study?.client}</h4>
                  <p className="text-sm text-text-secondary mb-3">{study?.challenge}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">Result:</span>
                    <span className="text-sm font-bold text-success">{study?.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-brand rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Scale Your Growth?</h3>
            <p className="text-white/90 mb-4">Book a strategy call to discuss your specific needs</p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onBookCall(service)}
              className="hover-brand"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;