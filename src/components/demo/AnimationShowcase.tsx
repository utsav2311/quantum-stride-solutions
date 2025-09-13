import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  AnimatedSection, 
  ParallaxContainer, 
  StaggeredGrid, 
  MicroInteraction,
  ScrollProgressBar 
} from '@/components/animations';

const AnimationShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <ScrollProgressBar color="gradient" />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxContainer speed={0.5} className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
        </ParallaxContainer>
        
        <AnimatedSection 
          animation="zoom-in" 
          className="z-10 text-center"
          delay={200}
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Modern Web Animations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Experience smooth, performance-optimized animations that bring your website to life
          </p>
          
          <div className="flex gap-4 justify-center">
            <MicroInteraction type="lift" intensity="normal">
              <Button variant="magnetic" size="lg">
                Try Magnetic Button
              </Button>
            </MicroInteraction>
            
            <MicroInteraction type="glow" intensity="strong">
              <Button variant="glow" size="lg">
                Glow Effect
              </Button>
            </MicroInteraction>
          </div>
        </AnimatedSection>
      </section>

      {/* Staggered Grid Demo */}
      <section className="py-20 px-8">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Staggered Animations</h2>
          <p className="text-muted-foreground">Elements animate in sequence for visual hierarchy</p>
        </AnimatedSection>

        <StaggeredGrid 
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          animation="scale-in"
          staggerDelay={150}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <MicroInteraction key={item} type="lift" intensity="subtle">
              <Card className="p-6 h-48 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 animate-pulse-slow" />
                  <h3 className="font-semibold">Animation {item}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Smooth entrance effect</p>
                </div>
              </Card>
            </MicroInteraction>
          ))}
        </StaggeredGrid>
      </section>

      {/* Micro-interactions Demo */}
      <section className="py-20 px-8 bg-muted/30">
        <AnimatedSection animation="slide-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Micro-interactions</h2>
          <p className="text-muted-foreground">Subtle feedback that enhances user experience</p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <MicroInteraction type="scale" intensity="normal">
            <Card className="p-6 text-center cursor-pointer">
              <h3 className="font-semibold mb-2">Scale</h3>
              <p className="text-sm text-muted-foreground">Hover to scale</p>
            </Card>
          </MicroInteraction>

          <MicroInteraction type="lift" intensity="normal">
            <Card className="p-6 text-center cursor-pointer">
              <h3 className="font-semibold mb-2">Lift</h3>
              <p className="text-sm text-muted-foreground">Hover to lift</p>
            </Card>
          </MicroInteraction>

          <MicroInteraction type="glow" intensity="normal">
            <Card className="p-6 text-center cursor-pointer">
              <h3 className="font-semibold mb-2">Glow</h3>
              <p className="text-sm text-muted-foreground">Hover to glow</p>
            </Card>
          </MicroInteraction>

          <MicroInteraction type="tilt" intensity="normal">
            <Card className="p-6 text-center cursor-pointer">
              <h3 className="font-semibold mb-2">Tilt</h3>
              <p className="text-sm text-muted-foreground">Hover to tilt</p>
            </Card>
          </MicroInteraction>
        </div>
      </section>

      {/* Parallax Demo */}
      <section className="relative py-40 overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-primary/10 to-transparent" />
        </ParallaxContainer>
        
        <ParallaxContainer speed={0.6} className="absolute inset-0">
          <div className="w-64 h-64 bg-accent/20 rounded-full blur-2xl mx-auto mt-20" />
        </ParallaxContainer>

        <div className="relative z-10 text-center px-8">
          <AnimatedSection animation="rotate-in" delay={300}>
            <h2 className="text-5xl font-bold mb-6">Parallax Scrolling</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple layers moving at different speeds create depth and engagement
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 text-center">
        <AnimatedSection animation="scale-in" delay={100}>
          <h2 className="text-4xl font-bold mb-6">Ready to Animate?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            These animations are built with performance in mind, using GPU acceleration and viewport detection
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button variant="medical" size="lg" className="animate-glow">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default AnimationShowcase;