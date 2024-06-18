'use client';
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from '@/components/ui/command';
import {Popover, PopoverContent, PopoverTrigger,} from '@/components/ui/popover';
import {useState} from 'react';
import {Check, ChevronsUpDown} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';

interface ComboboxProps {
  label: string;
  items: string[];
  defaultValue?: string;
  className?: string;
}

export const Combobox = ({
 label,
 items,
 defaultValue = '',
 className,
}: ComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn('justify-between', className)}
        >
          {value || `${label}`}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50 ' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0 '>
        <Command>
          <CommandInput placeholder={`Search ${label}`} />
          <CommandList className='no-scrollbar'>
            <CommandEmpty>No {label} found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === item ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
