import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, IndianRupee, Download } from 'lucide-react';

const schedules = [
  {
    course: 'Tanjore Painting',
    timing: 'Mon, Wed, Fri - 10:00 AM to 12:00 PM',
    duration: '3 months',
    fee: '₹15,000',
    nextBatch: 'January 15, 2024'
  },
  {
    course: 'Kerala Mural Art',
    timing: 'Tue, Thu, Sat - 2:00 PM to 4:00 PM',
    duration: '4 months',
    fee: '₹18,000',
    nextBatch: 'February 1, 2024'
  },
  {
    course: 'Mysore Painting',
    timing: 'Mon, Wed, Fri - 4:00 PM to 6:00 PM',
    duration: '2 months',
    fee: '₹12,000',
    nextBatch: 'January 22, 2024'
  }
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-stone-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-temple-maroon mb-4">
              Schedule & Fees
            </h2>
            <p className="font-body text-xl text-temple-maroon/80 max-w-2xl mx-auto">
              Choose your preferred timing and begin your artistic journey
            </p>
            <div className="w-32 h-1 bg-temple-gold mx-auto rounded-full mt-6"></div>
          </div>

          {/* Schedule Table */}
          <div className="scroll-frame mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-temple-gold">
                    <th className="text-left py-4 px-6 font-title text-temple-maroon">Course</th>
                    <th className="text-left py-4 px-6 font-title text-temple-maroon">Timing</th>
                    <th className="text-left py-4 px-6 font-title text-temple-maroon">Duration</th>
                    <th className="text-left py-4 px-6 font-title text-temple-maroon">Fee</th>
                    <th className="text-left py-4 px-6 font-title text-temple-maroon">Next Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map((schedule, index) => (
                    <tr key={index} className="border-b border-temple-gold/30 hover:bg-temple-gold/10 transition-colors">
                      <td className="py-4 px-6 font-title font-bold text-temple-maroon">{schedule.course}</td>
                      <td className="py-4 px-6 text-temple-maroon/80 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {schedule.timing}
                      </td>
                      <td className="py-4 px-6 text-temple-maroon/80">{schedule.duration}</td>
                      <td className="py-4 px-6 text-temple-maroon font-bold flex items-center gap-1">
                        <IndianRupee className="w-4 h-4" />
                        {schedule.fee.replace('₹', '')}
                      </td>
                      <td className="py-4 px-6 text-temple-maroon/80 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {schedule.nextBatch}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="scroll-frame">
              <h3 className="font-title text-2xl font-bold text-temple-maroon mb-4">What's Included</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  All art materials and tools
                </li>
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Personal guidance from expert teachers
                </li>
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Certificate upon course completion
                </li>
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Exhibition opportunity for best works
                </li>
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Lifetime access to alumni community
                </li>
              </ul>
            </div>

            <div className="scroll-frame">
              <h3 className="font-title text-2xl font-bold text-temple-maroon mb-4">Payment Options</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Full payment with 10% discount
                </li>
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Monthly installments available
                </li>
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Online payment accepted
                </li>
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Student discount: 15% off
                </li>
                <li className="flex items-center gap-2 text-temple-maroon/80">
                  <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                  Group booking: 20% off for 3+ students
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <Button variant="diya" size="lg" className="mr-4">
              Book Your Seat Now
            </Button>
            <Button variant="stone" size="lg" className="inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Detailed Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;