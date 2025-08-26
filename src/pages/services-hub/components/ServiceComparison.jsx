import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = ({ services, onSelectService }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleServiceSelection = (serviceId) => {
    setSelectedServices(prev => {
      if (prev?.includes(serviceId)) {
        return prev?.filter(id => id !== serviceId);
      } else if (prev?.length < 3) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const comparisonFeatures = [
    "Strategy Development",
    "Implementation Timeline",
    "Reporting Frequency",
    "Team Size",
    "Platform Coverage",
    "Optimization Cycles",
    "Creative Assets",
    "Performance Tracking"
  ];

  const getFeatureValue = (service, feature) => {
    const featureMap = {
      "Strategy Development": service?.strategyDepth || "Comprehensive",
      "Implementation Timeline": service?.timeline || "8-12 weeks",
      "Reporting Frequency": service?.reporting || "Weekly",
      "Team Size": service?.teamSize || "3-5 experts",
      "Platform Coverage": service?.platforms || "Multi-platform",
      "Optimization Cycles": service?.optimization || "Continuous",
      "Creative Assets": service?.creative || "Custom",
      "Performance Tracking": service?.tracking || "Real-time"
    };
    return featureMap?.[feature];
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Compare Our Services
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            Select up to 3 services to compare features, timelines, and deliverables
          </p>
          <div className="text-sm text-text-secondary">
            Selected: {selectedServices?.length}/3 services
          </div>
        </div>

        {/* Service Selection */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {services?.map((service) => (
            <div
              key={service?.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedServices?.includes(service?.id)
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
              onClick={() => toggleServiceSelection(service?.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                  selectedServices?.includes(service?.id) ? 'bg-primary' : 'bg-surface'
                }`}>
                  <Icon 
                    name={service?.icon} 
                    size={24} 
                    className={selectedServices?.includes(service?.id) ? 'text-white' : 'text-primary'}
                  />
                </div>
                <h3 className="font-semibold text-sm text-text-primary mb-2">{service?.title}</h3>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedServices?.includes(service?.id)
                    ? 'bg-primary border-primary' :'border-border'
                }`}>
                  {selectedServices?.includes(service?.id) && (
                    <Icon name="Check" size={12} className="text-white" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedServices?.length > 0 && (
          <div className="bg-surface rounded-xl p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-text-primary">Features</th>
                  {selectedServices?.map(serviceId => {
                    const service = services?.find(s => s?.id === serviceId);
                    return (
                      <th key={serviceId} className="text-center py-4 px-4 font-semibold text-text-primary min-w-[200px]">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-2">
                            <Icon name={service?.icon} size={16} className="text-white" />
                          </div>
                          <span className="text-sm">{service?.title}</span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures?.map((feature, index) => (
                  <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-surface/50'}>
                    <td className="py-4 px-4 font-medium text-text-primary">{feature}</td>
                    {selectedServices?.map(serviceId => {
                      const service = services?.find(s => s?.id === serviceId);
                      return (
                        <td key={serviceId} className="py-4 px-4 text-center text-text-secondary">
                          {getFeatureValue(service, feature)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="border-t border-border">
                  <td className="py-4 px-4 font-medium text-text-primary">Starting Investment</td>
                  {selectedServices?.map(serviceId => {
                    const service = services?.find(s => s?.id === serviceId);
                    return (
                      <td key={serviceId} className="py-4 px-4 text-center">
                        <div className="text-lg font-bold text-primary">{service?.startingPrice}</div>
                        <div className="text-xs text-text-secondary">per month</div>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="py-4 px-4"></td>
                  {selectedServices?.map(serviceId => {
                    const service = services?.find(s => s?.id === serviceId);
                    return (
                      <td key={serviceId} className="py-4 px-4 text-center">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => onSelectService(service)}
                          className="hover-brand"
                          iconName="ArrowRight"
                          iconPosition="right"
                        >
                          Select Service
                        </Button>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {selectedServices?.length === 0 && (
          <div className="text-center py-12 bg-surface rounded-xl">
            <Icon name="MousePointer" size={48} className="text-text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Select Services to Compare
            </h3>
            <p className="text-text-secondary">
              Click on the service cards above to start comparing features and pricing
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceComparison;