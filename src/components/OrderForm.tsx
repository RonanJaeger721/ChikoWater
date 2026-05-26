import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, User, Mail, Calendar, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_PHONE, SERVICES } from '../data';

interface OrderFormProps {
  selectedServiceId: string;
  onServiceChange: (id: string) => void;
}

export default function OrderForm({ selectedServiceId, onServiceChange }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    urgency: 'Standard (Next 12-24 Hours)',
    capacity: '5,000 Litres',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [localOrders, setLocalOrders] = useState<any[]>([]);

  // Load previous local orders to show visual feedback (local room db simulation)
  useEffect(() => {
    const saved = localStorage.getItem('chiko_water_inquires');
    if (saved) {
      try {
        setLocalOrders(JSON.parse(saved));
      } catch (e) {
        setLocalOrders([]);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill out Name, Phone, and Delivery Address.');
      return;
    }

    const selectedService = SERVICES.find(s => s.id === selectedServiceId)?.title || 'Bulk Delivery';

    const newOrder = {
      id: `CHIKO-${Date.now().toString().slice(-6)}`,
      name: formData.name,
      phone: formData.phone,
      service: selectedService,
      address: formData.address,
      urgency: formData.urgency,
      capacity: formData.capacity,
      notes: formData.additionalNotes,
      timestamp: new Date().toLocaleString(),
      status: 'Awaiting Driver Conf.'
    };

    // Save locally
    const updated = [newOrder, ...localOrders].slice(0, 5); // keep last 5
    setLocalOrders(updated);
    localStorage.setItem('chiko_water_inquires', JSON.stringify(updated));

    // Submit flags
    setSubmitted(true);

    // Automatically trigger structured WhatsApp redirection payload
    const textMessage = `Hi Chiko Water Delivery, I am submitting an urgent bulk water request through your website order card:
- Order Reference: ${newOrder.id}
- My Name: ${formData.name}
- Contact Phone: ${formData.phone}
- Service Selection: ${selectedService}
- Delivery Location: ${formData.address}
- Required Capacity: ${formData.capacity}
- Delivery Urgency: ${formData.urgency}
${formData.additionalNotes ? `- Details: ${formData.additionalNotes}` : ''}
Please confirm driver assignment and EcoCash/USD billing!`;

    const encoded = encodeURIComponent(textMessage);
    
    // Non-blocking redirect timeout to let user see confirmation
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank', 'noreferrer,noopener');
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      address: '',
      urgency: 'Standard (Next 12-24 Hours)',
      capacity: '5,000 Litres',
      additionalNotes: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="order-form" className="py-24 bg-gradient-to-b from-blue-50/10 via-white to-blue-50/40 relative overflow-hidden">
      
      {/* Wave decorative backplate */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Urgent CTA details & Contact card */}
          <div className="lg:col-span-5 space-y-8" id="cta-contact-block">
            
            {/* Main CTA Section */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block">
                Instant Dispatch
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-950 tracking-tight leading-tight">
                Need Water Delivered Fast?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Contact Chiko Water Delivery today for reliable bulk water delivery services. We maintain emergency standbys 7 days a week, ensuring you never run short of clean,tested borehole utility water.
              </p>
            </div>

            {/* Direct Instant Action click badges */}
            <div className="flex flex-col sm:flex-row gap-4" id="cta-instant-actions">
              <a 
                href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi%20Chiko%20Water%20Delivery,%2520I%20need%20bulk%20water%20delivered%20immediately.`}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-emerald-100 transition-all hover:scale-[1.02] text-sm"
              >
                <MessageSquare size={18} />
                <span>WhatsApp: {PHONE_NUMBER}</span>
              </a>

              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-blue-150 transition-all hover:scale-[1.02] text-sm"
              >
                <Phone size={18} />
                <span>Call : {PHONE_NUMBER}</span>
              </a>
            </div>

            {/* Structured Contact Details card */}
            <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-6" id="official-contact-address-card">
              <h3 className="text-base font-display font-bold text-blue-950">Official Business Coordinates</h3>
              
              <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-blue-950">Active Region</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Harare, Chitungwiza, Ruwa, Norton & surrounding areas, Zimbabwe</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-blue-950">Hotline & WhatsApp Support</span>
                    <span className="block text-xs text-slate-500 mt-0.5">077 222 8029 (Daily 07:00 - 18:00)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-pulse">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <span className="block font-bold text-emerald-800">Dispatch Queue Active</span>
                    <span className="block text-[11px] text-emerald-600">Average response time currently under 2.5 hours</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Working Interactive Scheduling board */}
          <div className="lg:col-span-7" id="booking-board">
            <div className="bg-white rounded-[2rem] border border-blue-100 p-6 sm:p-10 shadow-xl shadow-blue-950/[0.03]">
              
              {!submitted ? (
                // Booking form
                <form onSubmit={handleFormSubmit} className="space-y-6" id="chiko-schedule-form">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-display font-bold text-blue-955 text-blue-950">
                      Reserve Water Delivery Logistics
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out coordinates below to automatically configure WhatsApp payload text
                    </p>
                  </div>

                  {/* Customer credentials rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Your Full Name:
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Marshal Chinyemba"
                          className="w-full bg-slate-50 text-slate-800 border border-slate-150 py-3.5 pl-10 pr-4 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                        />
                        <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-450 text-slate-400">
                          <User size={14} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Phone / WhatsApp Number:
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 0772228029"
                          className="w-full bg-slate-50 text-slate-800 border border-slate-150 py-3.5 pl-10 pr-4 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                        />
                        <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone size={14} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service selections row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Service Required:
                      </label>
                      <select
                        value={selectedServiceId}
                        onChange={(e) => onServiceChange(e.target.value)}
                        className="w-full bg-slate-50 text-slate-850 border border-slate-150 py-3.5 px-4 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Capacity Needed (Litres):
                      </label>
                      <select
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 text-slate-850 border border-slate-150 py-3.5 px-4 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800"
                      >
                        <option value="2,500 Litres (Slimline refilling)">2,500 Litres (Slimline refilling)</option>
                        <option value="5,000 Litres (Standard Jojo)">5,000 Litres (Standard Jojo)</option>
                        <option value="10,000 Litres (Industrial/Resi Tanker)">10,000 Litres (Resi Tanker)</option>
                        <option value="20,000 Litres+ (High Compaction/Pool)">20,000 Litres+ (Pool/Site)</option>
                      </select>
                    </div>
                  </div>

                  {/* Address inputs */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Delivery Street Address & District:
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="e.g. 14 Domboshava Road, Glen Lorne, Harare"
                        className="w-full bg-slate-50 text-slate-800 border border-slate-150 py-3.5 pl-10 pr-4 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      />
                      <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Urgence rating */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Delivery Urgency Level:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Standard (Next 12-24 Hours)', 'EMERGENCY Dispatch (Immediate)'].map((urg, idx) => (
                        <label 
                          key={idx} 
                          className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                            formData.urgency === urg
                              ? 'bg-blue-500 text-white border-blue-500 font-bold shadow-md shadow-blue-100'
                              : 'bg-slate-50 text-slate-700 border-slate-150 hover:border-blue-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={urg}
                            checked={formData.urgency === urg}
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            formData.urgency === urg ? 'border-white' : 'border-slate-400'
                          }`}>
                            {formData.urgency === urg && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                          </span>
                          <span className="text-[11px] font-sans tracking-tight">
                            {urg}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes text area */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Additional Access Directions or Notes (Optional):
                    </label>
                    <textarea
                      name="additionalNotes"
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="e.g. Overhead tank positioned on second level. Require 40-meter pipe to connect from garden entrance gate."
                      className="w-full bg-slate-50 text-slate-800 border border-slate-150 p-4 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    ></textarea>
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    id="submit-reserve-btn"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 rounded-xl hover:scale-[1.01] active:scale-95 transition-all text-xs tracking-wide cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                  >
                    <MessageSquare size={16} />
                    <span>Submit Request & Sync to WhatsApp</span>
                  </button>

                  <div className="text-center font-sans text-[10px] text-slate-400">
                    *Upon clicking, your inquiry is recorded and we launch WhatsApp with pre-filled logistics details to confirm final delivery ETA instantly.
                  </div>

                </form>
              ) : (
                // Submit confirmation
                <div className="py-12 text-center space-y-6" id="confirm-msg-screen">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={44} className="animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-extrabold text-blue-950">
                      Inquiry Logistics Compiled Successfully!
                    </h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Your water dispatch ticket has been recorded in local logs. We are now opening WhatsApp to synchronize directly with your closest active trucker.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl max-w-sm mx-auto text-left space-y-2">
                    <div className="flex justify-between text-[11px] text-slate-450 text-slate-500 font-bold uppercase tracking-wider">
                      <span>Order ticket</span>
                      <span className="text-blue-600">Awaiting Conf.</span>
                    </div>
                    <div className="text-sm font-bold text-blue-950">
                      Hi, {formData.name}!
                    </div>
                    <div className="text-xs text-slate-600 font-sans">
                      Our truck dispatch desk will prioritize your delivery block at <strong>{formData.address}</strong>.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <button
                      id="reset-form-btn"
                      onClick={handleReset}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Book Another Load
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=Emergency_Water_Reserve`}
                      target="_blank"
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-1"
                    >
                      <MessageSquare size={14} />
                      <span>Re-open WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Local inquires history stack - Shows local persistence and real operations */}
              {localOrders.length > 0 && (
                <div className="mt-8 pt-8 border-t border-slate-100 space-y-4" id="local-logged-inquires">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Your Pending Inquiries (Local Logs)
                  </span>
                  
                  <div className="space-y-3">
                    {localOrders.map((ord) => (
                      <div 
                        key={ord.id} 
                        id={`local-ord-row-${ord.id}`}
                        className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 p-3.5 rounded-2xl flex justify-between items-center text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-800">{ord.id}</span>
                            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 rounded-md">
                              {ord.capacity}
                            </span>
                          </div>
                          <span className="block text-[10px] text-slate-400">
                            {ord.service} • {ord.address.length > 30 ? `${ord.address.slice(0, 30)}...` : ord.address}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                            <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span>
                            <span>{ord.status}</span>
                          </span>
                          <span className="block text-[9px] text-slate-450 text-slate-400 mt-1">
                            {ord.timestamp.split(',')[0]}
                          </span>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
